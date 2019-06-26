class Game {
    constructor() {
        this.uuid = UUID();
        this.players = {};
        this.gameHandler = new GameHandler(this);
    }

    update() {
        this.gameHandler.update();
    }
}

class Player {
    constructor(userid) {
        this.userid = userid;
        this.position = new Vector(0,0);
        this.facing = 0;
    }
}

class Vector {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
}

class GameHandler {
    constructor(game) {
        this.game = game;
        this.lastState = {
            players: game.players
        };
    }

    update(deltaTime) {
        this.lastState = {
            p: this.game.players
        };
        io.emit("serverstate",this.lastState);
        window.requestAnimationFrame(this.update.bind(this));
    }

    updatePlayer() {

    }
}


const
    gameport = process.env.PORT || 4004,
    express = require("express"),
    session = require("express-session"),
    cookie = require("cookie"),
    cookieParser = require("cookie-parser"),
    sessionStore = new session.MemoryStore(),
    UUID = require("node-uuid"),
    verbose = false,
    app = express();

const COOKIE_SECRET = "secret";
const COOKIE_NAME = "sid";

global.window = global.document = global;
frame_time = 10; //on server we run at 45ms, 22hz

var vendors = [ 'ms', 'moz', 'webkit', 'o' ];

for ( var x = 0; x < vendors.length && !window.requestAnimationFrame; ++ x ) {
    window.requestAnimationFrame = window[ vendors[ x ] + 'RequestAnimationFrame' ];
    window.cancelAnimationFrame = window[ vendors[ x ] + 'CancelAnimationFrame' ] || window[ vendors[ x ] + 'CancelRequestAnimationFrame' ];
}

if ( !window.requestAnimationFrame ) {
    window.requestAnimationFrame = function ( callback, element ) {
        var currTime = Date.now(), timeToCall = Math.max( 0, frame_time - ( currTime - lastTime ) );
        var id = window.setTimeout( function() { callback( currTime + timeToCall ); }, timeToCall );
        lastTime = currTime + timeToCall;
        return id;
    };
}

if ( !window.cancelAnimationFrame ) {
    window.cancelAnimationFrame = function ( id ) { clearTimeout( id ); };
}

app.use(cookieParser(COOKIE_SECRET));

const server = app.listen(gameport);
console.log("Express: Listening on port " + gameport);

const io = require('socket.io')(server);

let
    game = new Game(),
    lastTime = 0;

game.update(lastTime);

io.sockets.on('connection',
    // We are given a websocket object in our function
    function(client) {

        client.userid = UUID();
        console.log("We got a new client: ", client.userid);

        client.emit("onconnected", { id: client.userid });

        game.players[client.userid] = new Player(client.userid);

        client.on("cp", (payload) => {
            client.emit("sp", payload);
        });

        client.on("i", (payload) => {
            //console.log("Received new input: " + payload);
            let player = game.players[client.userid];
            player.position.x = payload.x;
            player.position.y = payload.y;
            player.facing = payload.f
        });

        client.on("disconnect", (payload) => {
            console.log("client disconnected: " + client.userid);
            delete game.players[client.userid];
        });

    }
);