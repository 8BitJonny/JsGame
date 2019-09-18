export default class Vector {
    x: number;
    y: number;

    constructor(x: number, y:number) {
        this.x = fix(x);
        this.y = fix(y);
    };

    copy() {
        return new Vector(this.x, this.y);
    };

    add(otherVector: Vector) {
        return new Vector(this.x + otherVector.x, this.y + otherVector.y);
    };

    sub(otherVector: Vector) {
        return new Vector(this.x - otherVector.x, this.y - otherVector.y);
    };

    // scalar multiplication. see https://www.mathebibel.de/skalarmultiplikation
    mul_scalar(scalar: number) {
        return new Vector(this.x * scalar, this.y * scalar);
    }
};

// Todo: Make it cleaner: Duplicated Code
function fix (int: number, n?: number) {
    n = n || 3;
    return parseFloat(int.toFixed(n));
}