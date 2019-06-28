module.exports.InputHandler = class InputHandler{
    constructor(player, game){
        this.player = player;
        this.game = game;
        this.keysDown = [];
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
                    if(!this.keysDown.includes(event.code)){
                        this.keysDown.unshift(event.code);
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
                    let index = this.keysDown.indexOf(event.code);
                    
                    if(index > - 1){
                        this.keysDown.splice(index, 1);
                    }
                    
                    if(this.keysDown.length === 0){
                        this.player.stopMovement();
                    }
            }
        });
    };
    handleInput() {
        if(this.keysDown.length > 0){
            this.player.movePlayer(this.keysDown);
        }
    };
};