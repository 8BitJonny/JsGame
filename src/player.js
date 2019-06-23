import GameObject from "./gameObject";
import SpriteInterpreter from "./spriteInterpreter";
import Vector from "./vector";
import CollisionDetection from "./collisionDetection";

export default class Player extends GameObject {
    constructor(imgSprite,x,y){
        let PADDINGX = 34;
        let PADDINGY = 10;
        let SCALE = 1;
        let spriteInterpreter = new SpriteInterpreter(imgSprite, SCALE, 18, 0, 9, 4, PADDINGX, PADDINGY);
        
        super(spriteInterpreter, x, y);
        this.SCALE = SCALE;
        this.MAXSPEED = 1;
        this.facingDirection = 0;
        this.spriteInterpreterList = [
            spriteInterpreter,
            new SpriteInterpreter(imgSprite, this.SCALE,  1, 7, 9, 4, PADDINGX, PADDINGY, 10),
            new SpriteInterpreter(imgSprite, this.SCALE, 27, 7, 9, 4, PADDINGX, PADDINGY, 10),
            new SpriteInterpreter(imgSprite, this.SCALE, 19, 7, 9, 4, PADDINGX, PADDINGY, 10),
            new SpriteInterpreter(imgSprite, this.SCALE,  9, 7, 9, 4, PADDINGX, PADDINGY, 10)
        ];

        this.collisionDetection = null;
    };

    update() {
        if (this.collisionDetection != null) {
            let newVelocity = this.collisionDetection.isColliding(this.position, this.hitBox, this.velocity);
            this.velocity = newVelocity;
        }

        super.update();
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
        };
    };
};