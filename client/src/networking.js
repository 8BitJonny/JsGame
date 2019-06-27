module.exports.Networking = class Networking {
    constructor(ip,serverStateHandler) {
        this.socket = io.connect(ip);
        this.socket.on("onconnected", (payload) => {
            this.socket.userid = payload.id;
            this.networkStatus.innerHTML = "Connected";
        });

        this.socket.on("connectToRoom", (payload) => {
            this.networkStatus.innerHTML = payload.room;
        });

        this.socket.on("disconnect", () => {
            this.networkStatus.innerHTML = "Offline";
        });

        this.socket.on("sp", (payload) => {
            var tof = new Date().getTime() - parseFloat (payload.t);
            this.pingHtml.innerHTML = tof / 2
        });

        this.socket.on("serverstate", (payload) => {
            serverStateHandler(payload)
        });

        this.startPingTimer();

        this.networkStatus = document.getElementById("connectionStatus");
        this.pingHtml = document.getElementById("ping");
    }

    startPingTimer() {
        setInterval(() => {
            this.last_ping_time = new Date().getTime();
            this.socket.emit("cp", { t:this.last_ping_time });
        }, 1000);
    }

    sendPosition(character) {
        this.socket.emit("i", { x: character.position.x, y: character.position.y, f: character.facingDirection})
    }
}