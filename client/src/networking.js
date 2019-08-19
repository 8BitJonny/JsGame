const { Player } = require("./player");
const { Projectile } = require("./projectile");
const { SpriteInterpreter } = require("./spriteInterpreter");
const { Vector } = require("./vector");
const { fix, v_lerp } = require("./utils");

module.exports.Networking = class Networking {
    constructor(ip,game) {
        this.socket = io.connect(ip);
        this.game = game;

        this.socket.on('connect', this.onConnect.bind(this));
        this.socket.on("onconnected", this.onServerConnect.bind(this));
        this.socket.on("connectToRoom", this.onRoomConnect.bind(this));
        this.socket.on("disconnect", this.onServerDisconnect.bind(this));
        this.socket.on("sp", this.onServerPing.bind(this));
        this.socket.on("serverstate", this.onServerState.bind(this));

        this.startPingTimer();
        this.create_timer();

        this.networkStatus = document.getElementById("connectionStatus");
        this.pingHtml = document.getElementById("ping");

        // The amount of server messages we want to cache per frame for the last second.
        // In the case of Buffersize = 2 we store 60fps * Buffersize which is 60 * 2 so 120 Server Messages to be able to interpolate.
        this.BUFFERSIZE = 1;
        this.NET_OFFSET = 0.2; // 200ms behind the actual server messages to smooth out online player

        // Because of the set NET_OFFSET our Client time is a bit behind the actual
        // server time to be ale to interpolate
        this.serverTime = 0;
        this.clientTime = 0;

        this._deltaTime = 0;
        this._lastTimeStamp = 0;

        // A list of received updates from the server with the max length of
        // 60 fps * BUFFERSIZE
        this.serverUpdates = [];
    }

    // Send a Ping every X seconds to the server to measure it
    startPingTimer() {
        setInterval(() => {
            this.last_ping_time = new Date().getTime();
            this.socket.emit("cp", { t:this.last_ping_time });
        }, 1000);
    }

    // Sends the received input from the player and the StateIndex to the server e.g. which keys he pressed to move or to do an action
    sendInput(inputState) {
        this.lastSendSID = inputState.stateIndex;
        this.socket.emit("i", { k: inputState.keysDown, si: inputState.stateIndex, td: inputState.timeDelta, t: inputState.time});
    }

    // Corrects the previous made Client Side prediction with the newest received
    // server updates
    clientPredictionCorrection() {
        if(this.serverUpdates.length <= 0) {
            return
        }

        const lastUpdate = this.serverUpdates[this.serverUpdates.length - 1];

        const serverConfirmedPosition = lastUpdate.p[this.socket.userid].p;
        const lastInputProcessedOnServer = lastUpdate.p[this.socket.userid].si;

        let localInputIndex = -1;

        // Find out which index the latest confirmed input at the server
        // has in our Input History List
        for (let i = 0; i < this.game.character.inputHistory.length; i++) {
            if (this.game.character.inputHistory[i].stateIndex === lastInputProcessedOnServer) {
                localInputIndex = i;
            }
        }

        // If we found the index. Correct that position and reapply all the inputs
        // that happened after it
        if (localInputIndex > -1 ) {
            const inputsToClear = localInputIndex+1;
            this.game.inputHandler.inputHistory.splice(0,inputsToClear);
            this.game.character.inputHistory.splice(0,inputsToClear);

            this.game.character.position = new Vector(serverConfirmedPosition.x, serverConfirmedPosition.y);
            this.game.character.lastInputID = localInputIndex;
        }
    }

    // Process the Network Updates and Interpolate the positions for all objects
    // coming from online
    processNetUpdates() {
        if (this.serverUpdates.length === 0) {
            return
        }

        // Prepare for Interpolation
        let previous = null;
        let target = null;

        let a = 0;
        let b = 0;
        let debug = [];

        // find out between which two serverupdates we are currently because we
        // NET_OFFSET amount of seconds behind the server
        for (let i = 0; i < this.serverUpdates.length - 1; i++) {
            let point = this.serverUpdates[i];
            let next_point = this.serverUpdates[i+1];

            a = point.t;
            b = next_point.t;
            debug.push({a,b});

            if (this.clientTime >= point.t && next_point.t > this.clientTime) {
                previous = point;
                target = next_point;
                break;
            }
        }

        // Error because we didn't find the previous and next server update
        if (!previous || !target) {
            //console.error("shouldn happen: \n Client Time: ", this.clientTime, " \n point time: ", a, " \ next time: ", b );
            //console.error(debug);
            previous = this.serverUpdates[0];
            target = this.serverUpdates[0];
        }

        let relativeDistance = null;

        // Calculate how far we are in between the previous and the next server update
        // in percent.
        if (previous && target) {
            let currentDistance = this.clientTime - previous.t;
            let maxDistance = target.t - previous.t;
            relativeDistance = fix(currentDistance/maxDistance);
        }

        // Catch corner cases with the relativeDistance in percent
        if( isNaN(relativeDistance) ) relativeDistance = 0;
        if(relativeDistance === -Infinity) relativeDistance = 0;
        if(relativeDistance === Infinity) relativeDistance = 0;

        // iterate over every player send from the server
        for (let playerId in target.p) {
            if (!target.p.hasOwnProperty(playerId)) {
                // The object doesn't have the property and we just skip it
                continue
            }

            if (this.socket.userid === playerId) {
                // we don't want to interpolate ourselves
                continue
            }

            const targetPlayerState = target.p[playerId];

            if (this.game.onlinePlayer.hasOwnProperty(playerId)) {
                // The player object already exists and we just need to update him
                if (!previous.p.hasOwnProperty(playerId)) {
                    // The object doesn't have the property and we just skip it
                    continue
                }

                let basePlayerState = previous.p[playerId];
                let onlinePlayer = this.game.onlinePlayer[playerId];

                // calculate the position based on the previous calculated percentage
                onlinePlayer.position = v_lerp(basePlayerState.p, targetPlayerState.p, relativeDistance);
                // update player
                onlinePlayer.facing = targetPlayerState.f;
                onlinePlayer.spriteInterpreter = onlinePlayer.spriteInterpreterList[targetPlayerState.f];
            } else {
                // This online player recently joined and is not in the onlinePlayer array
                // Therefore create a new entry for him in the array

                // this.game.onlinePlayer[playerId] = new Player(this.game.assetLoader.sprites["player1"], targetPlayerState.p.x, targetPlayerState.p.y)
            }
        }

        // iterate over every object send from the server
        for (let index in target.o) {
            console.log("1");
            const targetObjectState = target.o[index];

            let localObject = this.game.objects.filter(object => object.id === targetObjectState.id)[0];
            if (localObject !== undefined) {
                console.log("2");
                // The online object already exists in our game and we just need to update it
                let baseObjectState = previous.o.filter(object => object.id === targetObjectState.id)[0];
                if (baseObjectState === undefined) {
                    // We don't have any previous data points for this object
                    continue
                }
                console.log("3");
                // calculate the position based on the previous calculated percentage
                localObject.position = v_lerp(baseObjectState.p, targetObjectState.p, relativeDistance);
            } else {
                // The online object is new and we don't have it locally
                // Therefore create a new entry for it in the array
                console.log("4");
                switch(targetObjectState.t) {
                    case "projectile":
                        const sprite = this.game.assetLoader.sprites["ball"];
                        const projectile = new Projectile(targetObjectState.p, new Vector(0,0), targetObjectState.to, sprite, null);
                        projectile.id = targetObjectState.id;
                        this.game.objects.push(projectile);

                        console.log("5: ", this.game.objects[this.game.objects.length - 1].id, ": :", targetObjectState.id);
                        break;
                    default:
                        break;
                }
            }

        }
    }

    //////////////////////////////////////////
    // *--   Connection Event Handler   --* //

    onConnect(payload) {
        // Send initial Data on connection
        this.socket.emit("id", { pn: this.game.character.playerName});
    }

    onServerConnect(payload) {
        this.socket.userid = payload.id;
        this.game.ui.displayVersions(this.game.config.clientVersion, payload.v);
        this.networkStatus.innerHTML = "Connected";
        this.networkStatus.innerHTML = payload.l;

        // init all online player
        for (let playerId in payload.p) {
            if (!this.game.onlinePlayer.hasOwnProperty(playerId)
             && payload.p.hasOwnProperty(playerId)
             && this.socket.userid !== playerId) {
                let newPlayer = payload.p[playerId];
                this.game.onlinePlayer[playerId] = new Player(this.game.assetLoader.sprites["player2"], newPlayer.p.x, newPlayer.p.y, newPlayer.pn)
            }
        }
    }

    onRoomConnect(payload) {
        // here we get notified of the new players initial data like playername
        if (!this.game.onlinePlayer.hasOwnProperty(payload.newPlayer.id)) {
            this.game.onlinePlayer[payload.newPlayer.id] = new Player(this.game.assetLoader.sprites["player2"], payload.newPlayer.p.x, payload.newPlayer.p.y, payload.newPlayer.pn)
        }
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

        this.serverTime = payload.t;
        this.clientTime = fix(this.serverTime - this.NET_OFFSET);

        // Clear the oldest serverUpdates if we exceed the array length limit
        if(this.serverUpdates.length > ( 60*this.BUFFERSIZE )) {
            const amountToClear = this.serverUpdates.length - ( 60*this.BUFFERSIZE );
            this.serverUpdates.splice(0,amountToClear);
        }

        this.game.objects = this.game.objects.filter(object => object.id !== "none");

        // Apply the server state for each player
        for (let playerId in payload.p) {
            if (this.socket.userid === playerId) {
                // This is our player instance
                if (!payload.p.hasOwnProperty(playerId)) {
                    // The object doesn't have the property and we just skip it
                    return
                }

                if (!Networking.isValidNetworkObject(payload.p[playerId])) {
                    console.error("Network Player Object with ID: ", playerId, " is not a valid object");
                    return
                }

                this.clientPredictionCorrection();
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

    // create an accurate time
    create_timer() {
        setInterval(function(){
            this._deltaTime = new Date().getTime() - this._lastTimeStamp;
            this._lastTimeStamp = new Date().getTime();
            this.clientTime += this._deltaTime/1000;
        }.bind(this), 4);
    }

    static isValidNetworkObject(obj) {
        return obj.hasOwnProperty("f") && obj.hasOwnProperty("p") && obj.hasOwnProperty("si");
    }
};