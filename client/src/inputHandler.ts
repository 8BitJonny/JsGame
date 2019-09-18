import Player from "./player";
import Game from "./game";

export interface InputState {
    stateIndex: number;
    keysDown: string[];
    timeDelta: number;
    time: number;
}

export default class InputHandler{
    player: Player;
    game: Game;
    PROJECTILE_CD: number;
    lastProjectile: number;
    inputState: InputState;
    inputHistory: InputState[];

    constructor(player: Player, game: Game){
        this.player = player;
        this.game = game;
        this.PROJECTILE_CD = 0.2;
        this.lastProjectile = 0;

        this.inputState = {
            stateIndex: 0,
            keysDown: [],
            timeDelta: null,
            time: null
        };
        this.inputHistory = [];

        document.addEventListener("keydown",event => {
            // Movement keys
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
                    if (this.game.gamePaused) {
                        // If game is paused, ignore movement input
                        return
                    }

                    if(!this.inputState.keysDown.includes(event.code)){
                        this.inputState.keysDown.unshift(event.code);
                    }
            }

            // Pause Key
            if (event.code === "Escape") {
                this.game.onPause();
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

    handleInput(timePassed: number) {
        this.inputState.stateIndex ++;
        // Later on we can filter out keys that aren't relevant for the server like pause button pressed

        this.inputHistory.push({
            stateIndex: this.inputState.stateIndex,
            keysDown: this.inputState.keysDown.slice(),
            timeDelta: timePassed,
            time: this.game.networking.clientTime
        });
        this.player.inputHistory.push({
            stateIndex: this.inputState.stateIndex,
            keysDown: this.inputState.keysDown.slice(),
            timeDelta: timePassed,
            time: this.game.networking.clientTime
        });

        this.player.handleInput(this.game.objects);
    };

    prepareAndReturnInputStateForServer() {
        return this.inputHistory[this.inputHistory.length - 1];
    }
};