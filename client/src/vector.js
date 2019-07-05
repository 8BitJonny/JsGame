export default class Vector {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    };

    copy() {
        return new Vector(this.x, this.y);
    };

    add(otherVector) {
        return new Vector(this.x + otherVector.x, this.y + otherVector.y);
    };

    sub(otherVector) {
        return new Vector(this.x - otherVector.x, this.y - otherVector.y);
    };
};