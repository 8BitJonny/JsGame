import { makeId } from "./utils";
import Vector from "./vector";
import SpriteInterpreter from "./spriteInterpreter";

export default class GameObject {
    type: string;
    id: string;
    owner: string;
    spriteInterpreter: SpriteInterpreter;
    position: Vector;
    velocity: Vector;
    timeBasedVelocity: Vector;
    toBeDeleted: boolean;
    hitBox: { width: number, height: number };
    children: GameObject[];

    constructor(id: string, spriteInterpreter: SpriteInterpreter, x: number, y: number, type: string, owner: string) {
        this.type = type;
        this.id = id != null ? id : makeId(5);
        this.owner = owner; // the player who create this object

        this.spriteInterpreter = spriteInterpreter;
        this.position = new Vector(x,y);
        this.velocity = new Vector(0,0);
        this.timeBasedVelocity = new Vector(0,0); // this veloctiy is based on how much time passed
        this.toBeDeleted = false;

        let shapeWidth = this.spriteInterpreter != null ? this.spriteInterpreter.shapeWidth : 0;
        let shapeHeight = this.spriteInterpreter != null ? this.spriteInterpreter.shapeHeight : 0;

        this.hitBox = {
            width: shapeWidth,
            height: shapeHeight 
        };

        // all gameObjects that are children's of this gameObjects and are rendered relative to the parent
        this.children = []
    };

    draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.position.x, this.position.y);

        if(this.spriteInterpreter != null){
            this.spriteInterpreter.draw(ctx);
        }

        for (let i = 0; i < this.children.length; i++) {
            this.children[i].draw(ctx);
        }

        ctx.restore();
    };
    
    update(timePassed: number) {
        // the velocity represent the speed in pixels per second.
        this.position = this.position.add(this.timeBasedVelocity);
    };

    calculateTimeBasedVelocity(timePassed: number) {
        this.timeBasedVelocity = this.velocity.mul_scalar(timePassed)
    }
    
    drawDebug(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = "red";
        ctx.strokeRect(this.position.x,this.position.y,this.hitBox.width,this.hitBox.height);
    };

    addChildren(obj: GameObject) {
        this.children.push(obj);
    }

    // This function returns a small an compact object describing the player state
    // It is only used by the server, NOT by the client.
    returnNetworkData(): object {
        return {
            id: this.id,
            t: this.type,
            p: {                        // Send the position
                x: this.position.x,
                y: this.position.y
            }
        }
    }
};