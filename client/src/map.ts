import SpriteInterpreter from "./spriteInterpreter";
import GameObject from "./gameObject";

export default class Map {
    SCALE: number;
    spriteInterpreter?: SpriteInterpreter;
    backgroundLayers: any[];
    foregroundLayers: any[];
    colliders: GameObject[];

    constructor(mapJson: JSON, mapImage: CanvasImageSource, totalShapeCount: number, shapesInRow: number, shapesInColumn: number){
        this.SCALE = 4;
        this.spriteInterpreter = mapImage != null ? new SpriteInterpreter(
            mapImage,
            this.SCALE,
            0,
            totalShapeCount - 1,
            shapesInRow,
            shapesInColumn,
        ) : null;
        this.backgroundLayers = [];
        this.foregroundLayers = [];
        this.colliders = [];

        this.readMapData(mapJson);
    };

    drawBackground(ctx: CanvasRenderingContext2D) {
        this.draw(ctx, this.backgroundLayers);
    };

    drawForeground(ctx: CanvasRenderingContext2D) {
        this.draw(ctx, this.foregroundLayers);
    };

    draw(ctx: CanvasRenderingContext2D, tileLayers: any[]) {
        if (this.spriteInterpreter === null) {
            return
        }

        tileLayers.forEach(layer =>{
            let x = 0;
            let y = 0;
            layer.data.forEach((value: number, index: number) => {
                this.spriteInterpreter.currentShapeIndex = value - 1;

                x = index % layer.width;
                y = Math.floor(index / layer.width);
                
                ctx.save();
                ctx.translate(
                    x * this.spriteInterpreter.shapeWidth * this.SCALE,
                    y * this.spriteInterpreter.shapeHeight * this.SCALE
                );
                
                this.spriteInterpreter.draw(ctx);
                ctx.restore();
            });
        });
    };

    readMapData(json: any) {
        json.layers.forEach((layer: any) =>{
            switch(layer.type) {
                case "tilelayer":
                    switch (layer.name) {
                        case "Backround":
                            this.backgroundLayers.push(layer);
                            break;
                        case "Foreground":
                            this.foregroundLayers.push(layer);
                            break;
                    }
                    break;
                case "objectgroup":
                    layer.objects.forEach((object: any) => {
                        let newCollider = new GameObject(null, null, object.x * this.SCALE, object.y * this.SCALE, null, null);
                        newCollider.hitBox = {
                            width: object.width * this.SCALE, 
                            height: object.height * this.SCALE  
                        };
                        this.colliders.push(newCollider);
                    });
                    break;
            }
        });
    };
};