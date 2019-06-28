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

    movePlayer(keysDown) {
        var newVelocity = new Vector(0,0);
        let oldFacingDirection = this.facingDirection;

        // Change speed and faced direction according to keyboard input
        if (keysDown.includes("KeyW") || keysDown.includes("ArrowUp")) {
            newVelocity.y -= this.MAXSPEED;
            this.facingDirection = 1;
        }

        if (keysDown.includes("KeyS") || keysDown.includes("ArrowDown")) {
            newVelocity.y += this.MAXSPEED;
            this.facingDirection = 3;
        }

        if (keysDown.includes("KeyA") || keysDown.includes("ArrowLeft")) {
            newVelocity.x -= this.MAXSPEED;
            this.facingDirection = 4;
        }

        if (keysDown.includes("KeyD") || keysDown.includes("ArrowRight")) {
            newVelocity.x += this.MAXSPEED;
            this.facingDirection = 2;
        }

        if (oldFacingDirection !== this.facingDirection) {
            this.spriteInterpreter = this.spriteInterpreterList[this.facingDirection]
        }

        if (keysDown.length === 0) {
            this.facingDirection = 0;
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

    returnNetworkData() {
        return {
            p: {
                x: this.position.x,
                y: this.position.y
            },
            f: this.facingDirection
        }
    }
};