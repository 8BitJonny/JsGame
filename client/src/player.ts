import GameObject from "./gameObject";
import TextDrawer from "./textDrawer";
import SpriteInterpreter from "./spriteInterpreter";
import Vector from "./vector";
import CollisionDetection from "./collisionDetection";
import Projectile from "./projectile";
import { InputState } from "./inputHandler";

export default class Player extends GameObject {
    SCALE: number;
    MAXSPEED: number;
    id: string;
    playerName: string;
    facingDirection: number;
    spriteInterpreterList: SpriteInterpreter[];
    projectileSprite: CanvasImageSource;
    collisionDetection?: CollisionDetection;
    lastInputID: number;
    inputHistory: InputState[];
    PROJECTILE_CD: number;
    lastProjectile: number;

    constructor(imgSprite: CanvasImageSource, x: number, y: number, playerName: string, projectileSprite: CanvasImageSource){
        let PADDINGX = 42;
        let PADDINGY = 10;
        let SCALE = 1;
        let spriteInterpreter = imgSprite != null ? new SpriteInterpreter(imgSprite, SCALE, 0, 0, 4, 4, PADDINGX, PADDINGY) : null;

        super(null, spriteInterpreter, x, y, "player", null);
        this.SCALE = SCALE;
        this.MAXSPEED = 140;

        this.id = null;
        this.playerName = playerName;
        if (spriteInterpreter != null) {
            this.addChildren(new TextDrawer(playerName, this.spriteInterpreter.shapeWidth/2, 0));
        }

        this.facingDirection = 0;
        this.spriteInterpreterList = [
            spriteInterpreter,
            imgSprite != null ? new SpriteInterpreter(imgSprite, this.SCALE,  5, 2, 4, 4, PADDINGX, PADDINGY, 10) : null,
            imgSprite != null ? new SpriteInterpreter(imgSprite, this.SCALE,  9, 2, 4, 4, PADDINGX, PADDINGY, 10) : null,
            imgSprite != null ? new SpriteInterpreter(imgSprite, this.SCALE,  1, 2, 4, 4, PADDINGX, PADDINGY, 10) : null,
            imgSprite != null ? new SpriteInterpreter(imgSprite, this.SCALE, 13, 2, 4, 4, PADDINGX, PADDINGY, 10) : null
        ];
        this.projectileSprite = projectileSprite;

        this.collisionDetection = null;

        this.lastInputID = -1;
        this.inputHistory = [];

        this.PROJECTILE_CD = 0.2;
        this.lastProjectile = 0;
    };

    update(timePassed: number) {
        if (this.collisionDetection != null) {
            //check for Collision before updating position
            let oldPosition = this.position.copy();

            //check if the hitbox of the next frame collides with something when only the xVelocity is added to the hitbox
            this.position.x += this.timeBasedVelocity.x;
            let isCollidingX = this.collisionDetection.isColliding(this.position, this.hitBox);

            if (isCollidingX) {
                // if it collides reset this the xVelocity
                this.timeBasedVelocity.x = 0;
            }

            //reset the hitbox to now check the yAxis
            this.position = oldPosition.copy();

            //check if the hitbox of the next frame collides with something when only the yVelocity is added to the hitbox
            this.position.y += this.timeBasedVelocity.y;
            let isCollidingY = this.collisionDetection.isColliding(this.position, this.hitBox);

            if (isCollidingY) {
                // if it collides reset this the yVelocity
                this.timeBasedVelocity.y = 0;
            }

            //reset the hitbox and the position because through object reference the position variable changed too
            this.position = oldPosition.copy();
        }
        super.update(timePassed);
    };

    handleInput(gameObjectList: GameObject[]) {
        if (!this.inputHistory.length) {
            // No Inputs to process
            this.velocity = new Vector(0, 0);
            return
        }

        const newVelocity = new Vector(0, 0);
        let oldFacingDirection = this.facingDirection;

        for (let inputIndex = 0; inputIndex < this.inputHistory.length; inputIndex++) {
            if (this.inputHistory[inputIndex].stateIndex <= this.lastInputID) {
                // Skipping this input because we already processed it
                continue
            }

            const input = this.inputHistory[inputIndex];
            for (let keyIndex = 0; keyIndex < input.keysDown.length; keyIndex++) {

                let key = input.keysDown[keyIndex];
                switch(key) {
                    case "KeyW":
                    case "ArrowUp":
                        // Move Up
                        newVelocity.y -= this.MAXSPEED * input.timeDelta;
                        break;
                    case "KeyS":
                    case "ArrowDown":
                        // Move Down
                        newVelocity.y += this.MAXSPEED * input.timeDelta;
                        break;
                    case "KeyA":
                    case "ArrowLeft":
                        // Move Left
                        newVelocity.x -= this.MAXSPEED * input.timeDelta;
                        break;
                    case "KeyD":
                    case "ArrowRight":
                        // Move Right
                        newVelocity.x += this.MAXSPEED * input.timeDelta;
                        break;
                    case "Space":
                        // Shoot Projectile
                        if (input.time > this.lastProjectile + this.PROJECTILE_CD) {
                            this.lastProjectile = input.time;
                            this.shootProjectile(input.time, this.projectileSprite, gameObjectList);
                        }

                        break;
                    default:
                        // code block
                }
            }
        }
        this.lastInputID = this.inputHistory[this.inputHistory.length - 1].stateIndex;

        this.updateFacingDirection(newVelocity,oldFacingDirection);

        this.velocity = newVelocity;
        this.timeBasedVelocity = this.velocity.copy();
    }

    updateFacingDirection(newVelocity: Vector, oldFacingDirection: number) {
        // Figure out the facing Direction
        if (newVelocity.x === 0 && newVelocity.y === 0) {
            this.facingDirection = 0;
        } else if (newVelocity.x === 0) {
            if (newVelocity.y < 0) {
                this.facingDirection = 1;
            } else {
                this.facingDirection = 3;
            }
        } else if (newVelocity.y === 0) {
            if (newVelocity.x < 0) {
                this.facingDirection = 4;
            } else {
                this.facingDirection = 2;
            }
        } else {
            if (newVelocity.x < 0) {
                this.facingDirection = 4;
            } else {
                this.facingDirection = 2;
            }
        }

        if (oldFacingDirection !== this.facingDirection) {
            this.spriteInterpreter = this.spriteInterpreterList[this.facingDirection]
        }
    }

    shootProjectile(timeOfCreation: number, sprite: CanvasImageSource, objects: GameObject[]) {
        let projectile = new Projectile(this.position.add(new Vector(20,10)), this.velocity, timeOfCreation, sprite, objects, this.id);
        projectile.spawn();
    };

    stopMovement() {
        this.facingDirection = 0;
        this.velocity = new Vector(0, 0);
        this.spriteInterpreter = this.spriteInterpreterList[0];
    };

    setCollisionDetectionObject(object: CollisionDetection) {
        this.collisionDetection = object;
    };

    // This function returns a small an compact object describing the player state
    // It is only used by the server, NOT by the client.
    returnNetworkData(): object {
        return {
            p: {                        // Send the position
                x: this.position.x,
                y: this.position.y
            },
            f: this.facingDirection,    // Send the direction the player is facing
            si: this.lastInputID         // Send the last process input
        }
    }
};