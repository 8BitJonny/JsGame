const { Game } = require("./game");

switch(window.location.pathname) {
    case "/":
        document.getElementById("loginButton").focus();
        document.getElementById("loginForm").onsubmit = (e) => {
            e.preventDefault();
            setInHouseRoutingToken();
            window.location.pathname = "/login.html";
        };
        break;
    case "/login":
    case "/login.html":
        validateInHouseRoutingToken();
        document.getElementById("playerName").focus();
        document.getElementById("playForm").onsubmit = (e) => {
            e.preventDefault();
            setInHouseRoutingToken();

            let startScreen = document.getElementById("startScreen");
            let playerName = document.getElementById("playerName").value;

            // if name is null or empty
            if (!playerName||!playerName.trim()) {
                let errorSpan = document.getElementById("formError");
                errorSpan.innerHTML = "The name cannot be empty!";
                errorSpan.className = "error active";
                e.preventDefault();
                return
            }

            if (playerName.length > 12) {
                let errorSpan = document.getElementById("formError");
                errorSpan.innerHTML = "The given name is too long!";
                errorSpan.className = "error active";
                e.preventDefault();
                return
            }

            startScreen.style.display = "none";

            setLocalStorage("playername", playerName);
            window.location.pathname = "/game.html";
        };
        // code block
        break;
    case "/game":
    case "/game.html":
        validateInHouseRoutingToken();
        const playername = readLocalStorage("playername");

        let game = new Game();
        game.start(playername);
        break;
    default:
       // page not found
}

function readLocalStorage(key) {
    if (typeof(Storage) !== "undefined") {
        return localStorage.getItem(key)
    } else {
        console.error("Localstorage is not supported")
    }
}

function setLocalStorage(key,value) {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem(key, value)
    } else {
        console.error("Localstorage is not supported")
    }
}

function setInHouseRoutingToken() {
    setLocalStorage("inHouseRouting", "true");
}

function validateInHouseRoutingToken() {
    const inHouseRouting = readLocalStorage("inHouseRouting");
    setLocalStorage("inHouseRouting", false);
    if (inHouseRouting !== "true") {
        window.location.pathname = "/";
    }
}