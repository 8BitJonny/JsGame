const { GameObject } = require("./gameObject");

module.exports.TextDrawer = class TextDrawer extends GameObject {
    constructor(text, x, y) {
        super(null, x, y);
        this.text = text
    };

    draw(ctx) {
        ctx.save();
        ctx.translate(this.position.x, this.position.y);

        ctx.textAlign = "center";

        ctx.fillText(this.text, 0, 0);

        ctx.restore();
    };

    update() {

    };

    drawDebug(ctx) {

    };
};