const frameTime = 10; //on server we run at 45ms, 22hz
const vendors = [ 'ms', 'moz', 'webkit', 'o' ];
let lastTime = 0;
global.window = global.document = global;

for ( let x = 0; x < vendors.length && !window.requestAnimationFrame; ++ x ) {
    window.requestAnimationFrame = window[ vendors[ x ] + 'RequestAnimationFrame' ];
    window.cancelAnimationFrame = window[ vendors[ x ] + 'CancelAnimationFrame' ] || window[ vendors[ x ] + 'CancelRequestAnimationFrame' ];
}

if ( !window.requestAnimationFrame ) {
    window.requestAnimationFrame = function ( callback, element ) {
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
    }

    handlePlayerInput(playerID, payload) {
        let player = this.lobby.players[playerID];
        player.position.x = payload.x;
        player.position.y = payload.y;
        player.facingDirection = payload.f;
    }

    update(deltaTime) {
        this.lastState = {
            p: this.returnNetworkDataForAllPlayers()
        };
        this.lobby.broadcast("serverstate", this.lastState);
        window.requestAnimationFrame(this.update.bind(this));
    }

    updatePlayer() {

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