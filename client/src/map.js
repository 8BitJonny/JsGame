const { SpriteInterpreter } = require("./spriteInterpreter");
const { GameObject } = require("./gameObject");

module.exports.Map = class Map {
    constructor(mapJson, mapImage, totalShapeCount, shapesInRow, shapesInColumn){
        this.SCALE = 4;
        this.spriteinterpreter = mapImage != null ? new SpriteInterpreter(
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

    drawBackground(ctx) {
        this.draw(ctx, this.backgroundLayers);
    };

    drawForeground(ctx, objectsToDraw) {
        this.draw(ctx, this.foregroundLayers, objectsToDraw);
    };

    draw(ctx, tileLayers, objectsToDraw = []) {
        if (this.spriteinterpreter === null) {
            return
        }

        let layer = tileLayers[0];
        let nextElementToDraw = 0;

        let x = 0;
        let y = 0;
        console.log("_____________")
        layer.data.forEach((value, index) => {
            this.spriteinterpreter.currentShapeIndex = value - 1;

            x = index % layer.width;
            y = Math.floor(index / layer.width);

            ctx.save();
            ctx.translate(
                x * this.spriteinterpreter.shapeWidth * this.SCALE,
                y * this.spriteinterpreter.shapeHeight * this.SCALE
            );

            this.spriteinterpreter.draw(ctx);
            ctx.restore();

            if (objectsToDraw[nextElementToDraw] !== undefined) {
                if (objectsToDraw[nextElementToDraw].position.y > ((y) * this.spriteinterpreter.shapeHeight * this.SCALE)
                 && objectsToDraw[nextElementToDraw].position.y < ((y + 1) * this.spriteinterpreter.shapeHeight * this.SCALE)) {
                    console.log(y * this.spriteinterpreter.shapeHeight * this.SCALE);
                    console.log(objectsToDraw[nextElementToDraw].position);
                    objectsToDraw[nextElementToDraw].draw(ctx);
                    nextElementToDraw ++;
                    return
                }
            }
        });
    };

    readMapData(json) {
        json.layers.forEach(layer =>{
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
                    layer.objects.forEach(object => {
                        let newCollider = new GameObject(null, object.x * this.SCALE, object.y * this.SCALE);
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