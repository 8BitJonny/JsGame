class Game {
    constructor() {
        this.uuid = UUID()
        this.players = {}
        this.gameHandler = new GameHandler(this)
    }

    update() {
        this.gameHandler.update();
    }
};

class Player {
    constructor(userid) {
        this.userid = userid
        this.position = new Vector(0,0);
        this.facing = 0;
    }
};
class Vector {
    constructor(x,y) {
        this.x = x
        this.y = y
    }
};

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
        }
        io.emit("serverstate",this.lastState);
        window.requestAnimationFrame(this.update.bind(this));
    }

    updatePlayer() {

    }
};


var 
    gameport = process.env.PORT || 4004,
    express = require("express"),
    session = require("express-session"),
    cookie = require("cookie"),
    cookieParser = require("cookie-parser"),
    sessionStore = new session.MemoryStore();
    UUID = require("node-uuid"),
    verbose = false,
    app = express();

var COOKIE_SECRET = "secret";
var COOKIE_NAME = "sid";

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

//app.use(express.static('client'));
app.use(cookieParser(COOKIE_SECRET));
/* app.use(session({
    name: COOKIE_NAME,
    store: sessionStore,
    secret: COOKIE_SECRET,
    saveUninitialized: true,
    resave: true,
    cookie: {
        path: '/',
        httpOnly: true,
        secure: false,
        maxAge: null
    }
})); */

/* app.get("/", function(req,res) {
    res.sendFile(__dirname + "/client/index.html");
})
app.use(express.static(__dirname + "/client")); */

var server = app.listen(gameport);
console.log("Express: Listening on port " + gameport);

var io = require('socket.io')(server);

// io.use(function(socket, next) {
//     try {
//         var data = socket.handshake || socket.request;
//         if (!data.headers.cookie) {
//             return next(new Error('Missing cookie ' + COOKIE_NAME));
//         }
//         var cookies = cookie.parse(data.headers.cookie);
//         if (!cookies[COOKIE_NAME]) {
//             return next(new Error("Missing cookie " + COOKIE_NAME));
//         }

//         var sid = cookieParser.signedCookie(cookies[COOKIE_NAME], COOKIE_SECRET);
//         if (!sid) {
//             return next(new Error("Cookie signature is not valid"));
//         }
//         //console.log("session ID ( %s )", sid);
//         data.sid = sid;
//         sessionStore.get(sid, function (err, session) {
//             if (err) {
//                 console.log("err: " + err);
//                 return next(err);
//             }
//             if (!session) {
//                 console.log("session err: " + err)
//                 //return next(new Error("session not found"));
//                 next();
//                 return 
//             }
//             data.session = session;
//             next();
//         });
//     } catch (err) {
//         console.log(err.stack);
//         next(new error("Internal server error"));
//     }
// });

var 
    game = new Game(),
    lastTime = 0;

game.update(lastTime)

io.sockets.on('connection',
  // We are given a websocket object in our function
  function(client) {

    client.userid = UUID()
    console.log("We got a new client: ", client.userid);

    client.emit("onconnected", { id: client.userid })

    game.players[client.userid] = new Player(client.userid);

    client.on("cp", (payload) => {
        client.emit("sp", payload);
    });

    client.on("i", (payload) => {
        //console.log("Received new input: " + payload);
        var player = game.players[client.userid]
        player.position.x = payload.x
        player.position.y = payload.y
        player.facing = payload.f
    })

    client.on("disconnect", (payload) => {
        console.log("client disconnected: " + client.userid);
        delete game.players[client.userid];
    });

  }
);
