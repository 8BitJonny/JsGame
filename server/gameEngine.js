const { CollisionDetection } = require("../client/src/collisionDetection");

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

        this.lastFrameTime = 0;
    }

    handlePlayerInput(playerID, payload) {
        let player = this.lobby.players[playerID];
        player.inputHistory.push({
            stateIndex: payload.si,
            keysDown: payload.k
        });
        player.updateVelocity();
    }

    update(time) {
        let timeSinceLastFrame = (time - this.lastFrameTime) / 16;     //how much time has passed since last drawn frame relative to our standard interval of 16 ms
        this.lastFrameTime = time;

        // Update Position based on current set velocity.
        for (let playerID in this.lobby.players) {
            if (this.lobby.players.hasOwnProperty(playerID)) {
                this.lobby.players[playerID].update(timeSinceLastFrame);          // this player.update method also checks collision
            }
        }

        // build new serverState
        this.lastState = {
            p: this.returnNetworkDataForAllPlayers()
        };
        this.lobby.broadcast("serverstate", this.lastState);
        window.requestAnimationFrame(this.update.bind(this));
    }

    returnNetworkDataForAllPlayers() {
        let networkData = {};
        for (let playerID in this.lobby.players) {
            if (this.lobby.players.hasOwnProperty(playerID)) {
                networkData[playerID] = this.lobby.players[playerID].returnNetworkData()
            }
        }
        return networkData;
    }
};