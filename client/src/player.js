const { GameObject } = require("./gameObject");
const { SpriteInterpreter } = require("./spriteInterpreter");
const { Vector } = require("./vector");
const { CollisionDetection } = require("./collisionDetection");

module.exports.Player = class Player extends GameObject {
    constructor(imgSprite,x,y){
        let PADDINGX = 34;
        let PADDINGY = 10;
        let SCALE = 1;
        let spriteInterpreter = imgSprite != null ? new SpriteInterpreter(imgSprite, SCALE, 18, 0, 9, 4, PADDINGX, PADDINGY) : null;
        
        super(spriteInterpreter, x, y);
        this.SCALE = SCALE;
        this.MAXSPEED = 2;
        this.facingDirection = 0;
        this.spriteInterpreterList = [
            spriteInterpreter,
            imgSprite != null ? new SpriteInterpreter(imgSprite, this.SCALE,  1, 7, 9, 4, PADDINGX, PADDINGY, 10) : null,
            imgSprite != null ? new SpriteInterpreter(imgSprite, this.SCALE, 27, 7, 9, 4, PADDINGX, PADDINGY, 10) : null,
            imgSprite != null ? new SpriteInterpreter(imgSprite, this.SCALE, 19, 7, 9, 4, PADDINGX, PADDINGY, 10) : null,
            imgSprite != null ? new SpriteInterpreter(imgSprite, this.SCALE,  9, 7, 9, 4, PADDINGX, PADDINGY, 10) : null
        ];

        this.collisionDetection = null;

        this.lastInputID = -1;
        this.inputHistory = [];
    };

    update(timePassed) {
        if (this.collisionDetection != null) {
            //check for Collision before updating position
            let oldPosition = this.position.copy();

            //check if the hitbox of the next frame collides with something when only the xVelocity is added to the hitbox
            this.position.x += this.velocity.x;
            let isCollidingX = this.collisionDetection.isColliding(this.position, this.hitBox);

            if (isCollidingX) {
                // if it collides reset this the xVelocity
                this.velocity.x = 0;
            }

            //reset the hitbox to now check the yAxis
            this.position = oldPosition.copy();

            //check if the hitbox of the next frame collides with something when only the yVelocity is added to the hitbox
            this.position.y += this.velocity.y;
            let isCollidingY = this.collisionDetection.isColliding(this.position, this.hitBox);

            if (isCollidingY) {
                // if it collides reset this the yVelocity
                this.velocity.y = 0;
            }

            //reset the hitbox and the position because through object reference the position variable changed too
            this.position = oldPosition.copy();
        }

        super.update(timePassed);
    };

    updateVelocity() {
        if (!this.inputHistory.length) {
            // No Inputs to process
            return
        }

        const newVelocity = new Vector(0, 0);
        let oldFacingDirection = this.facingDirection;

        for (let inputIndex = 0; inputIndex < this.inputHistory.length; inputIndex++) {
            if (this.inputHistory[inputIndex].stateIndex <= this.lastInputID) {
                // Skipping this input because we already processed it
                continue
            }


            const keysDown = this.inputHistory[inputIndex].keysDown;
            for (let keyIndex = 0; keyIndex < keysDown.length; keyIndex++) {

                let key = keysDown[keyIndex];
                if (key === "KeyW" || key === "ArrowUp") {
                    newVelocity.y -= this.MAXSPEED;
                } else if (key === "KeyS" || key === "ArrowDown") {
                    newVelocity.y += this.MAXSPEED;
                } else if (key === "KeyA" || key === "ArrowLeft") {
                    newVelocity.x -= this.MAXSPEED;
                } else if (key === "KeyD" || key === "ArrowRight") {
                    newVelocity.x += this.MAXSPEED;
                }
            }
        }
        this.lastInputID = this.inputHistory[this.inputHistory.length - 1].stateIndex;

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

        this.velocity = newVelocity;
    };

    stopMovement() {
        this.facingDirection = 0;
        this.velocity = new Vector(0, 0);
        this.spriteInterpreter = this.spriteInterpreterList[0];
    };

    setCollisionDetectionObject(object) {
        if (object instanceof CollisionDetection) {
            this.collisionDetection = object;
        }
    };

    // This function returns a small an compact object describing the player state
    // It is only used by the server, NOT by the client.
    returnNetworkData() {
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