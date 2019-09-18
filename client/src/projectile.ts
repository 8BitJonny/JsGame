import SpriteInterpreter from "./spriteInterpreter";
import Vector from "./vector";
import GameObject from "./gameObject";

export default class Projectile extends GameObject{
    PROJECTILESPEED: number;
    LIFESPAN: number;
    objects: GameObject[];
    timeOfCreation: number;
    baseVelocity: Vector;

    constructor(position: Vector, baseVelocity: Vector, timeOfCreation: number, sprite: CanvasImageSource, objects: GameObject[], owner: string) {
        let projectileStartX = position.x;
        let projectileStartY = position.y;

        let spriteInterpreter = sprite != null ? new SpriteInterpreter(sprite, 1, 0, 7, 4, 2, 0, 0, 10) : null;
        let id = sprite != null ? "none" : null;
        super(id, spriteInterpreter, projectileStartX, projectileStartY, "projectile", owner);
        this.PROJECTILESPEED = 420;
        this.LIFESPAN = 0.7;
        this.objects = objects;
        this.timeOfCreation = timeOfCreation;
        this.baseVelocity = baseVelocity;
    }

    update(timePassed: number) {
        this.calculateTimeBasedVelocity(timePassed);

        super.update(timePassed);
    }

    spawn() {
        this.objects.push(this);

        if(this.baseVelocity.x > 0) {
            this.velocity.x = this.PROJECTILESPEED;
        } else if(this.baseVelocity.x < 0) {
            this.velocity.x = -this.PROJECTILESPEED;
        }
        if(this.baseVelocity.y > 0) {
            this.velocity.y = this.PROJECTILESPEED;
        } else if(this.baseVelocity.y < 0) {
            this.velocity.y = -this.PROJECTILESPEED;
        }
        if(this.baseVelocity.x === 0 && this.baseVelocity.y === 0) {
            this.velocity.y = this.PROJECTILESPEED;
        }
    }

    checkForDeletion(clientTime: number) {
        if (clientTime > this.timeOfCreation + this.LIFESPAN){
            this.toBeDeleted = true;
        }
    }

    // This function returns a small an compact object describing the player state
    // It is only used by the server, NOT by the client.
    returnNetworkData() {
        return {
            id: this.id,
            pid: this.owner,
            t: this.type,
            to: this.timeOfCreation,
            p: {                        // Send the position
                x: this.position.x,
                y: this.position.y
            }
        }
    }
};
