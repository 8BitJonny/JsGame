const { CollisionDetection } = require("../client/src/collisionDetection");
const { fix } = require("../client/src/utils");

const frameTime = 10; //on server we run at 45ms, 22hz
const vendors = [ 'ms', 'moz', 'webkit', 'o' ];
let lastTime = 0;
global.window = global.document = global;

for ( let x = 0; x < vendors.length && !window.requestAnimationFrame; ++ x ) {
    window.requestAnimationFrame = window[ vendors[ x ] + 'RequestAnimationFrame' ];
    window.cancelAnimationFrame = window[ vendors[ x ] + 'CancelAnimationFrame' ] || window[ vendors[ x ] + 'CancelRequestAnimationFrame' ];
}

if ( !window.requestAnimationFrame ) {
    window.requestAnimationFrame = function ( callback ) {
        var currTime = Date.now(), timeToCall = Math.max( 0, frameTime - ( currTime - lastTime ) );
        var id = window.setTimeout( function() { callback( currTime + timeToCall ); }, timeToCall );
        lastTime = currTime + timeToCall;
        return id;
    };
}

if ( !window.cancelAnimationFrame ) {
    window.cancelAnimationFrame = function ( id ) { clearTimeout( id ); };
}

module.exports.GameEngine = class {
    constructor(lobby) {
        this.lobby = lobby;
        this.lastState = {};
        this.collisionDetection = new CollisionDetection(this.lobby.map.colliders);

        // some variables for time management
        this._deltaTime = 16;
        this._lastTimeStamp = new Date().getTime();
        this.local_time = 0;
        this.create_timer();
    }

    // handle received player input
    handlePlayerInput(playerID, payload) {
        let player = this.lobby.players[playerID];
        player.inputHistory.push({
            stateIndex: payload.si,
            keysDown: payload.k,
            time: payload.t
        });
    }

    // update all players and send every connected client a new server state back
    update() {
        let timeSinceLastFrame = this._deltaTime / 7;     //how much time has passed since last drawn frame relative to our standard interval of 16 ms

        // Update Position based on current set velocity.
        for (let playerID in this.lobby.players) {
            if (this.lobby.players.hasOwnProperty(playerID)) {
                let player = this.lobby.players[playerID];
                player.updateVelocity();
                player.update(timeSinceLastFrame);          // this player.update method also checks collision
                player.inputHistory = [];
            }
        }

        // build new serverState
        this.lastState = {
            p: this.returnNetworkDataForAllPlayers(),
            t: fix(this.local_time)
        };
        this.lobby.broadcast("serverstate", this.lastState);
        window.requestAnimationFrame(this.update.bind(this));
    }

    // reduce player data to the minimum that is needed to be send over the network
    returnNetworkDataForAllPlayers() {
        let networkData = {};
        for (let playerID in this.lobby.players) {
            if (this.lobby.players.hasOwnProperty(playerID)) {
                networkData[playerID] = this.lobby.players[playerID].returnNetworkData()
            }
        }
        return networkData;
    }

    // create an accurate time
    create_timer() {
        setInterval(function(){
            this._deltaTime = new Date().getTime() - this._lastTimeStamp;
            this._lastTimeStamp = new Date().getTime();
            this.local_time += this._deltaTime/1000;
        }.bind(this), 4);
    }
};