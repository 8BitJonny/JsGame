const UUID = require("node-uuid");
const Express = require("express");
const SocketIO = require("socket.io");
const CookieParser = require("cookie-parser");

const { Server } = require("./server");

const config = require("./config.json");

const COOKIE_SECRET = "secret";

const app = Express();
const gamePort = process.env.PORT || 4004;

app.use(CookieParser(COOKIE_SECRET));

const expressInstance = app.listen(gamePort);
console.log("Express: Listening on port " + gamePort);

const io = SocketIO(expressInstance);

let server = new Server(io);

io.sockets.on('connection',
    // We are given a websocket object in our function
    function(client, name) {

        // Wait on initial Data to create User
        client.on("id", (payload) => {
            let firstLobby = "mainLobby";

            client.userid = UUID();
            console.log("[CON] We got a new client: ", client.userid.slice(0,5));

            server.switchPlayersLobby(client, null, firstLobby, payload.pn);

            let player = server.lobbies[firstLobby].players[client.userid];

            let playerNetworkData = player.returnNetworkData();
            playerNetworkData.pn = payload.pn;
            playerNetworkData.id = client.userid;

            // send networkData from all online players on initial connect
            let onlinePlayer = {};
            for (let playerId in server.lobbies[firstLobby].players) {
                if (server.lobbies[firstLobby].players.hasOwnProperty(playerId)) {
                    let networkData = server.lobbies[firstLobby].players[playerId].returnNetworkData();
                    networkData.pn = server.lobbies[firstLobby].players[playerId].playerName;

                    onlinePlayer[playerId] = networkData;
                }
            }

            client.emit("onconnected", { id: client.userid, v: config.serverVersion, l: firstLobby, p: onlinePlayer});

            // notify everyone in the lobby of the new player
            client.to("mainLobby").emit("connectToRoom", { newPlayer: playerNetworkData });
        });

        // Upon receiving ping request from client, server sends ping back
        client.on("cp", (payload) => {
            client.emit("sp", payload);
        });

        client.on("i", (payload) => {
            server.handlePlayerInput(client.lobby, client.userid, payload);
        });

        client.on("disconnect", () => {
            console.log("[DSC] Client disconnected: ", client.userid.slice(0,5));
            server.switchPlayersLobby(client, client.lobby, null);
        });

    }
);