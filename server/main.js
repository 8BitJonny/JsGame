const UUID = require("node-uuid");
const Express = require("express");
const SocketIO = require("socket.io");
const CookieParser = require("cookie-parser");

const { Server } = require("./server");

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
    function(client) {

        client.userid = UUID();
        console.log("[CON] We got a new client: ", client.userid.slice(0,5));

        client.emit("onconnected", { id: client.userid });
        server.switchPlayersLobby(client, null, "mainLobby");

        io.to("mainLobby").emit("connectToRoom", { room: "mainLobby" });

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