const { makeId } = require("./utils");
const { Vector } = require("./vector");

module.exports.GameObject = class GameObject {
    constructor(id, spriteInterpreter, x, y, type) {
        this.type = type;
        this.id = id != null ? id : makeId(5);

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

    draw(ctx) {                                                                             
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
    
    update() {
        // the velocity represent the speed in pixels per second.
        this.position = this.position.add(this.timeBasedVelocity);
    };

    calculateTimeBasedVelocity(timePassed) {
        this.timeBasedVelocity = this.velocity.mul_scalar(timePassed)
    }
    
    drawDebug(ctx) {
        ctx.strokeStyle = "red";
        ctx.strokeRect(this.position.x,this.position.y,this.hitBox.width,this.hitBox.height);
    };

    addChildren(obj) {
        if (obj instanceof GameObject) {
            this.children.push(obj);
        }
    }

    // This function returns a small an compact object describing the player state
    // It is only used by the server, NOT by the client.
    returnNetworkData() {
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