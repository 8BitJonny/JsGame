import GameObject from "./gameObject";
import Renderable from "./renderable";

export default class Map extends GameObject {
    constructor(mapJson, mapImage) {
        super(null, 0, 0);

        this.renderable = new Renderable(mapImage,0,1,2,1,0);
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
                    this.position.x + x * this.renderable.frameWidth + 50,
                    this.position.y + y * this.renderable.frameHeight + 50
                );

                this.renderable.draw(ctx);
                ctx.restore();
            })
        })
    }

}
