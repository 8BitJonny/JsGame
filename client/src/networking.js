const { Player } = require("./player");
const { Vector } = require("./vector");

module.exports.Networking = class Networking {
    constructor(ip,game) {
        this.socket = io.connect(ip);
        this.game = game;

        this.socket.on("onconnected", this.onServerConnect.bind(this));
        this.socket.on("connectToRoom", this.onRoomConnect.bind(this));
        this.socket.on("disconnect", this.onServerDisconnect.bind(this));
        this.socket.on("sp", this.onServerPing.bind(this));
        this.socket.on("serverstate", this.onServerState.bind(this));

        this.startPingTimer();

        this.networkStatus = document.getElementById("connectionStatus");
        this.pingHtml = document.getElementById("ping");

        // The amount of server messages we want to cache per frame for the last second.
        // In the case of Buffersize = 2 we store 60fps * Buffersize which is 60 * 2 so 120 Server Messages to be able to interpolate.
        this.BUFFERSIZE = 2;

        this.serverUpdates = [];
    }

    startPingTimer() {
        setInterval(() => {
            this.last_ping_time = new Date().getTime();
            this.socket.emit("cp", { t:this.last_ping_time });
        }, 1000);
    }

    // Sends the received input from the player and the StateIndex to the server e.g. which keys he pressed to move or to do an action
    sendInput(inputState) {
        if (inputState != null) {
            this.socket.emit("i", { k: inputState.keysDown, si: inputState.stateIndex });
        }
    }

    clientPredictionCorrection() {
        const lastUpdate = this.serverUpdates[this.serverUpdates.length - 1];

        const serverConfirmedPosition = lastUpdate.p[this.socket.userid].p;
        const lastInputProcessedOnServer = lastUpdate.p[this.socket.userid].si;

        let localInputIndex = -1;

        for (let i = 0; i < this.game.character.inputHistory.length; i++) {
            if (this.game.character.inputHistory[i].stateIndex === lastInputProcessedOnServer) {
                localInputIndex = i;
            }
        }

        if (localInputIndex > -1 ) {
            const inputsToClear = localInputIndex+1;
            this.game.inputHandler.inputHistory.splice(0,inputsToClear);

            this.game.character.position = new Vector(serverConfirmedPosition.x, serverConfirmedPosition.y);
            this.game.character.lastInputID = localInputIndex;
        }
    }

    updatePlayer(playerToUpdate, playerFromServer) {
        playerToUpdate.position.x = playerFromServer.p.x;
        playerToUpdate.position.y = playerFromServer.p.y;
        playerToUpdate.facing = playerFromServer.f;
        playerToUpdate.spriteInterpreter = playerToUpdate.spriteInterpreterList[playerFromServer.f];
    }

    //////////////////////////////////////////
    // *--   Connection Event Handler   --* //

    onServerConnect(payload) {
        this.socket.userid = payload.id;
        this.networkStatus.innerHTML = "Connected";
    }

    onRoomConnect(payload) {
        this.networkStatus.innerHTML = payload.room;
    }

    onServerDisconnect() {
        this.networkStatus.innerHTML = "Offline";
    }

    onServerPing(payload) {
        const tof = new Date().getTime() - parseFloat(payload.t);
        this.pingHtml.innerHTML = String(tof / 2);
    }

    onServerState(payload) {

        this.serverUpdates.push(payload);

        // Clear the oldest serverUpdates if we exceed the array length limit
        if(this.serverUpdates.length > ( 60*this.BUFFERSIZE )) {
            const amountToClear = this.serverUpdates.length - ( 60*this.BUFFERSIZE );
            this.serverUpdates.splice(0,amountToClear);
        }

        // Apply the server state for each player
        for (let playerId in payload.p) {
            if (!payload.p.hasOwnProperty(playerId)) {
                // The object doesn't have the property and we just skip it
                return
            }

            if (!Networking.isValidNetworkObject(payload.p[playerId])) {
                console.error("Network Player Object with ID: ", playerId, " is not a valid object");
                return
            }

            const playerFromServer = payload.p[playerId];

            if (this.socket.userid === playerId) {
                // This is our player instance
                this.clientPredictionCorrection();
            } else {
                // This is one of the online players

                if (this.game.onlinePlayer.hasOwnProperty(playerId)) {
                    // The player object already exists and we just need to update him
                    const playerToUpdate = this.game.onlinePlayer[playerId];
                    this.updatePlayer(playerToUpdate, playerFromServer)
                } else {
                    // This online player recently joined and is not in the onlinePlayer array
                    // Therefore create a new entry for him in the array
                    this.game.onlinePlayer[playerId] = new Player(this.game.assetLoader.sprites["player1"], playerFromServer.p.x, playerFromServer.p.y)
                }
            }

        }


        // Check if the server send us less players than we currently render
        // This means that we missed the message that one online player disconnect
        // Therefore we have to manually delete him from our online player array
        if (Object.keys(payload.p).length - 1 < Object.keys(this.game.onlinePlayer).length) {

            let updatedPlayer = Object.keys(payload.p);

            for (let onlinePlayerId in this.game.onlinePlayer) {
                if (this.game.onlinePlayer.hasOwnProperty(onlinePlayerId)) {
                    let index = updatedPlayer.indexOf(onlinePlayerId);

                    if(index === - 1){
                        delete this.game.onlinePlayer[onlinePlayerId];
                    }
                }
            }
        }
    }

    static isValidNetworkObject(obj) {
        return obj.hasOwnProperty("f") && obj.hasOwnProperty("p") && obj.hasOwnProperty("si");
    }
};