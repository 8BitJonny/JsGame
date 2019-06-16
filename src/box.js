export default class Box {
    constructor(position, width, height) {
        this.position = position;
        this.size = { width, height };
    }

    draw (ctx) {
        ctx.strokeStyle = "red";
        ctx.strokeRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }
}