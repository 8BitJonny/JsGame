const { Vector } = require("./vector");

module.exports.GameObject = class GameObject {
    constructor(spriteInterpreter, x, y) {
        this.spriteInterpreter = spriteInterpreter;
        this.position = new Vector(x,y);
        this.velocity = new Vector(0,0);

        let shapeWidth = this.spriteInterpreter != null ? this.spriteInterpreter.shapeWidth : 0;
        let shapeHeight = this.spriteInterpreter != null ? this.spriteInterpreter.shapeHeight : 0;

        this.hitBox = {
            width: shapeWidth,
            height: shapeHeight 
        };

    };

    draw(ctx) {
        ctx.save();
        ctx.translate(this.position.x, this.position.y);

        if(this.spriteInterpreter != null){
            this.spriteInterpreter.draw(ctx);
        }

        ctx.restore();
    };
    
    update() {
        // the velocity represent the speed in pixels per second.
        this.position = this.position.add(this.velocity);
    };
    
    drawDebug(ctx) {
        ctx.strokeStyle = "red";
        ctx.strokeRect(this.position.x,this.position.y,this.hitBox.width,this.hitBox.height);
    };
};