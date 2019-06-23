import SpriteInterpreter from "./spriteInterpreter";
import GameObject from "./gameObject";

export default class Map {
    constructor(mapJson, mapImage, totalShapeCount, shapesInRow, shapesInColumn){
        this.SCALE = 2.5;
        this.spriteinterpreter = new SpriteInterpreter(
            mapImage,
            this.SCALE,
            0,
            totalShapeCount - 1,
            shapesInRow,
            shapesInColumn,
            0,
            0,
            100
        );
        this.tileLayers = mapJson.layers.filter(layer => layer.type === "tilelayer");
        this.colliders = [] ;    
        mapJson.layers.forEach(layer =>{
            if(layer.type === "objectgroup"){
                layer.objects.forEach(object => {
                    let newCollider = new GameObject(null, object.x * this.SCALE, object.y * this.SCALE);
                    newCollider.hitBox = {
                        width: object.width * this.SCALE, 
                        height: object.height * this.SCALE  
                    };
                    this.colliders.push(newCollider);
                })
            };
        });    
        console.log(this.colliders);
    };
    draw(ctx) {
        this.tileLayers.forEach(layer =>{
            let x = 0;
            let y = 0;
            layer.data.forEach((value, index) => {
                ctx.save();
                this.spriteinterpreter.currentShapeIndex = value - 1;
                
                x = index % layer.width;
                y = Math.floor(index / layer.width);
                
                ctx.translate(
                    x * this.spriteinterpreter.shapeWidth * this.SCALE,
                    y * this.spriteinterpreter.shapeHeight * this.SCALE
                );
                
                this.spriteinterpreter.draw(ctx);
                ctx.restore();
            });
        });
    };
};