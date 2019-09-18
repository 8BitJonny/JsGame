import GameObject from "./gameObject"

export default class TextDrawer extends GameObject {
    text: string;

    constructor(text: string, x: number, y: number) {
        super(null, null, x, y, null, null);
        this.text = text
    };

    draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.position.x, this.position.y);

        ctx.textAlign = "center";

        ctx.fillText(this.text, 0, 0);

        ctx.restore();
    };

    update() {

    };

    drawDebug(ctx: CanvasRenderingContext2D) {

    };
};