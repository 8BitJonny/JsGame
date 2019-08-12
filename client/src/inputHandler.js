module.exports.InputHandler = class InputHandler{
    constructor(player, game){
        this.player = player;
        this.game = game;
        this.PROJECTILE_CD = 0.2
        this.lastProjectile = 0;

        this.inputState = {
            stateIndex: 0,
            keysDown: [],
            time: null
        };
        this.inputHistory = [];

        document.addEventListener("keydown",event => {
            switch(event.code) {
                case "KeyW":
                case "KeyA":
                case "KeyS":
                case "KeyD":
                case "ArrowUp":
                case "ArrowDown":
                case "ArrowLeft":
                case "ArrowRight":
                case "Space":
                    if(!this.inputState.keysDown.includes(event.code)){
                        this.inputState.keysDown.unshift(event.code);
                    }
            }
        });
        document.addEventListener("keyup",event => {
            switch(event.code) {
                case "KeyW":
                case "KeyA":
                case "KeyS":
                case "KeyD":
                case "ArrowUp":
                case "ArrowDown":
                case "ArrowLeft":
                case "ArrowRight":
                case "Space":
                    let index = this.inputState.keysDown.indexOf(event.code);
                    
                    if(index > - 1){
                        this.inputState.keysDown.splice(index, 1);
                    }
                    
                    if(this.inputState.keysDown.length === 0){
                        this.player.stopMovement();
                    }
            }
        });
    };

    handleInput(timePassed) {
        this.inputState.stateIndex ++;
        // Later on we can filter out keys that aren't relevant for the server like pause button pressed

        if (this.inputState.keysDown.includes("Space") && this.game.networking.clientTime > this.lastProjectile + this.PROJECTILE_CD){
            this.lastProjectile = this.game.networking.clientTime;
            this.player.shootProjectile(this.game.networking.clientTime, this.game.assetLoader.sprites["ball"],this.game.objects,this.inputState.keysDown);
        }
        this.inputHistory.push({
            stateIndex: this.inputState.stateIndex,
            keysDown: this.inputState.keysDown.slice(),
            time: timePassed
        });
        this.player.inputHistory.push({
            stateIndex: this.inputState.stateIndex,
            keysDown: this.inputState.keysDown.slice(),
            time: timePassed
        });

        this.player.updateVelocity();
    };

    prepareAndReturnInputStateForServer() {
        return this.inputHistory[this.inputHistory.length - 1];
    }
};