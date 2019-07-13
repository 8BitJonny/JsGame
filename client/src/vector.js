module.exports.Vector = class Vector {
    constructor(x,y) {
        this.x = fix(x);
        this.y = fix(y);
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
        return new Vector(this.x * scalar, this.y * scalar);
    }
};

// Todo: Make it cleaner: Duplicated Code
function fix (int,n) {
    n = n || 3;
    return parseFloat(int.toFixed(n));
}