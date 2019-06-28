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

    // scalar multiplication. see https://www.mathebibel.de/skalarmultiplikation
    mul_scalar(scalar) {
        return new Vector(Number((this.x * scalar).toFixed(3)), Number((this.y * scalar).toFixed(3)));
    }
};