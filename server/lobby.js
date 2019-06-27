const UUID = require("node-uuid");
const { Player } = require("../client/src/player");
const { GameEngine } = require("./gameEngine");

module.exports.Lobby = class Lobby {
    constructor(socket, mapID, lobbyID) {
        this.id = lobbyID || UUID();
        this.socket = socket;
        this.players = {};
        this.mapID = mapID;
        this.gameEngine = new GameEngine(this);
        this.gameEngine.update();
    }

    update() {
        this.gameEngine.update();
    }

    // Send Message to all players in this lobby
    broadcast(messageType,message) {
        this.socket.to(this.id).emit(messageType,message);
    }

    // Connects Player to Lobby
    addPlayer(playerID) {
        console.log("connects: " + playerID.slice(0,5) + " to Lobby: ", this.id);
        this.players[playerID] = new Player(null, 100, 100); //Todo Later on spawn him on map defined spawn point
    }

    // Disconnects Player fro Lobby
    removePlayer(playerID) {
        console.log("disconnects: " + playerID.slice(0,5) + " from Lobby: ", this.id);
        delete this.players[playerID];
    }

    handlePlayerInput(playerID, payload) {
        this.gameEngine.handlePlayerInput(playerID, payload);
    }
};