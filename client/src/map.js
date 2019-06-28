const { SpriteInterpreter } = require("./spriteInterpreter");
const { GameObject } = require("./gameObject");

module.exports.Map = class Map {
    constructor(mapJson, mapImage, totalShapeCount, shapesInRow, shapesInColumn){
        this.SCALE = 2;
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

    drawForeground(ctx) {
        this.draw(ctx, this.foregroundLayers);
    };

    draw(ctx, tileLayers) {
        if (this.spriteinterpreter === null) {
            return
        }

        tileLayers.forEach(layer =>{
            let x = 0;
            let y = 0;
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
            });
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