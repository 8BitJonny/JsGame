module.exports.Vector = class Vector {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    };

    copy() {
        return new Vector(this.x, this.y);
    };

    add(otherVector) {
        this.x += otherVector.x;
        this.y += otherVector.y;
    };

    sub(otherVector) {
        this.x -= otherVector.x;
        this.y -= otherVector.y;
    };
};