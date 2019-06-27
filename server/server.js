const { Lobby } = require("./lobby");

module.exports.Server = class {
    constructor(io) {
        this.socket = io;
        this.lobbies = {};
        this.createLobbyFor("map1","mainLobby");        // Todo: Define Constants / Enum to be sure which mapID exists
        console.log("created Lobby with ID: ", this.lobbies)
    }

    //Create lobby for requested map
    createLobbyFor(mapID, lobbyID) {
        let newLobby = new Lobby(this.socket, mapID, lobbyID);
        this.lobbies[newLobby.id] = newLobby;
    }

    //Connects a Player to a Lobby or disconnects a Player from a Lobby or does both
    switchPlayersLobby(player, fromLobbyID, toLobbyID) {
        if (fromLobbyID) {
            this.lobbies[fromLobbyID].removePlayer(player.userid);
            player.lobby = null;
            player.leave(fromLobbyID);                              //Disconnect him to the socket room
        }

        if (toLobbyID) {
            this.lobbies[toLobbyID].addPlayer(player.userid);
            player.join(toLobbyID);                                 //Connect him to the socket room
            player.lobby = toLobbyID;
        }
    }

    handlePlayerInput(lobbyID, playerID, payload) {
        //check if player is really connected to given lobby and let the lobby handle his input
        if (this.lobbies.hasOwnProperty(lobbyID)) {
            if (this.lobbies[lobbyID].players.hasOwnProperty(playerID)) {
                this.lobbies[lobbyID].handlePlayerInput(playerID, payload);
                return
            }
        }
        console.error("Input cannot be handled. Player isn't connected to given Lobby");
    }
};