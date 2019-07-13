module.exports.InputHandler = class InputHandler{
    constructor(player, game){
        this.player = player;
        this.game = game;
        this.inputState = {
            stateIndex: 0,
            keysDown: []
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

    handleInput() {
        if (this.inputState.keysDown.length > 0) {
            this.inputState.stateIndex ++;              // Later on we can filter out keys that aren't relevant for the server like pause button pressed

            var newInputState = {
                stateIndex: this.inputState.stateIndex,
                keysDown: this.inputState.keysDown
            };

            this.inputHistory.push(newInputState);
            this.player.inputHistory.push(newInputState);

            this.player.updateVelocity();
        }
    };

    prepareAndReturnInputStateForServer() {
        return this.inputState;
    }
};