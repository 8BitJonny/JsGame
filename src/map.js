import GameObject from "./gameObject";
import Renderable from "./renderable";

export default class Map extends GameObject {
    constructor(mapJson, mapImage, totalSpriteCount, spriteInRow, spriteInColumn) {
        super(null, 0, 0);

        this.SCALE = 2;

        this.renderable = new Renderable(mapImage,this.SCALE,0,totalSpriteCount-1,spriteInRow,spriteInColumn,0);
        this.data = mapJson;
    }

    draw(ctx) {
        this.data.layers.forEach(layer => {
            let x = 0;
            let y = 0;
            layer.data.forEach((value, index) => {
                ctx.save();
                this.renderable.frame = value - 1;

                x = index % layer.width;
                y = Math.floor(index/layer.width);

                ctx.translate(
                    this.position.x + x * this.renderable.frameWidth * this.SCALE,
                    this.position.y + y * this.renderable.frameHeight * this.SCALE
                );

                this.renderable.draw(ctx);
                ctx.restore();
            })
        })
    }

}
