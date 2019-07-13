const UUID = require("node-uuid");
const { Player } = require("../client/src/player");
const { GameEngine } = require("./gameEngine");
const { Map } = require("../client/src/map");

module.exports.Lobby = class Lobby {
    constructor(socket, mapID, mapObj, lobbyID) {
        this.id = lobbyID || UUID();
        this.socket = socket;
        this.players = {};
        this.mapID = mapID;
        this.map = new Map(mapObj, null, null, null, null);
        this.gameEngine = new GameEngine(this);
        this.gameEngine.update(0);
    }

    // Send Message to all players in this lobby
    broadcast(messageType,message) {
        this.socket.to(this.id).emit(messageType,message);
    }

    // Connects Player to Lobby
    addPlayer(playerID) {
        console.log("[LBY] Connects: " + playerID.slice(0,5) + " to Lobby: ", this.id);
        let newPlayer = new Player(null, 100, 100); //Todo Later on spawn him on map defined spawn point
        newPlayer.collisionDetection = this.gameEngine.collisionDetection;
        newPlayer.hitBox = {                        //Todo That is really bad written
            width: 30.2,
            height: 53
        };
        this.players[playerID] = newPlayer;
    }

    // Disconnects Player fro Lobby
    removePlayer(playerID) {
        console.log("[LBY] Disconnects: " + playerID.slice(0,5) + " from Lobby: ", this.id);
        delete this.players[playerID];
    }

    // handlePlayerInput
    handlePlayerInput(playerID, payload) {
        this.gameEngine.handlePlayerInput(playerID, payload);
    }
};