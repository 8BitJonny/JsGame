const { Projectile } = require("../client/src/projectile");
const { CollisionDetection } = require("../client/src/collisionDetection");
const { fix } = require("../client/src/utils");

const frameTime = 45; //on server we run at 45ms, 22hz
const vendors = [ 'ms', 'moz', 'webkit', 'o' ];
let lastTime = 0;
global.window = global.document = global;

window.requestAnimationFrame = function ( callback ) {
    var currTime = Date.now(), timeToCall = Math.max( 0, frameTime - ( currTime - lastTime ) );
    let timeDiff = (currTime + timeToCall - lastTime) / 1000;
    var id = window.setTimeout( function() { callback( timeDiff ); }, timeToCall );
    lastTime = currTime + timeToCall;
    return id;
};

window.cancelAnimationFrame = function ( id ) { clearTimeout( id ); };

module.exports.GameEngine = class {
    constructor(lobby) {
        this.lobby = lobby;
        this.lastState = {};
        this.collisionDetection = new CollisionDetection(this.lobby.map.colliders);
        this.gameObjects = [];

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
            timeDelta: payload.td,
            time: payload.t
        });
    }

    // update all players and send every connected client a new server state back
    update(timeSinceLastFrame) {
        // Update Position based on current set velocity.
        for (let playerID in this.lobby.players) {
            if (this.lobby.players.hasOwnProperty(playerID)) {
                let player = this.lobby.players[playerID];
                player.handleInput(this.gameObjects);
                player.update();          // this player.update method also checks collision
                player.inputHistory = [];
            }
        }

        for (let i = 0; i < this.gameObjects.length; i++) {
            let object = this.gameObjects[i];

            if (object instanceof Projectile) {
                object.checkforDeletion(this.local_time);
            }
            if (this.gameObjects[i].toBeDeleted === true){
                this.gameObjects.splice(i,1);
            }

            object.update(timeSinceLastFrame);
        }

        // build new serverState
        this.lastState = {
            p: this.returnNetworkDataForAllPlayers(),
            o: this.returnNetworkDataForAllObjects(),
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

    // reduce object data to the minimum that is needed to be send over the network
    returnNetworkDataForAllObjects() {
        let networkData = [];
        for (let index in this.gameObjects) {
            const object = this.gameObjects[index];
            networkData.push(object.returnNetworkData())
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