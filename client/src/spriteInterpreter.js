module.exports.SpriteInterpreter = class SpriteInterpreter {
    constructor(
       image,
       scale,
       startShapeIndex,
       shapeCount,
       shapesX,
       shapesY,
       paddingX = 0,
       paddingY = 0,
       speed = 0 
    ){
       this.image = image;
       this.scale = scale;
       this.currentShapeIndex = startShapeIndex;
       this.startShapeIndex = startShapeIndex;
       this.endShapeIndex = startShapeIndex + shapeCount;
       this.shapesX = shapesX;
       this.shapesY = shapesY;
       this.paddingX = paddingX;
       this.paddingY = paddingY;
       this.speed = speed;

       this.shapeWidth = (this.image.width - this.paddingX * (this.shapesX - 1)) / this.shapesX;
       this.shapeHeight = (this.image.height - this.paddingY * (this.shapesY - 1)) / this.shapesY;
       this.nextFrameTime = new Date().getTime();
    };
    
    draw(ctx) {
        let currentTime = new Date().getTime();
        if(this.speed > 0 && currentTime > this.nextFrameTime){
            this.currentShapeIndex ++;
            this.nextFrameTime = currentTime + (1000/this.speed);
        };
        if(this.currentShapeIndex > this.endShapeIndex){
            this.currentShapeIndex = this.startShapeIndex;
        };
        let posX = (this.currentShapeIndex % this.shapesX) * this.shapeWidth + (this.currentShapeIndex % this.shapesX) * this.paddingX;
        let posY = Math.floor(this.currentShapeIndex / this.shapesX) * this.shapeHeight + Math.floor(this.currentShapeIndex / this.shapesX) * this.paddingY;

        ctx.drawImage(
            this.image,
            posX,
            posY,
            this.shapeWidth,
            this.shapeHeight,
            0,
            0,
            this.shapeWidth * this.scale,
            this.shapeHeight * this.scale
        );
    };
};