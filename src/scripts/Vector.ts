

export class Vector {

    x; y;

    get length(): number {
        return Math.sqrt(this.dot());
    }

    get angle(): number {
        return Math.asin((this.y / this.length));
    }

    get tan(): number {
        return this.y / this.x;
    }

    get cotan(): number {
        return 1 / this.tan;
    }

    get cos(): number {
        return this.x;
    }

    get sin(): number {
        return this.y;
    }

    static get ZERO(): Vector {
        return new Vector(0, 0);
    }

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    scale(scalar) {
        return new Vector(this.x * scalar, this.y * scalar);
    }

    div(vector, y) {
        let x;
        if (vector instanceof Vector) {
            y = vector.y;
            x = vector.x;
        } else if (typeof vector == "number" && y == undefined) {
            x = vector;
            y = vector;
        }
        return new Vector(this.x / x, this.y / y);
    }

    mul(vector): Vector {
        return new Vector(this.x * vector.x, this.y * vector.y);
    }

    add(vector): Vector {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    sub(vector): Vector {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    distanceTo(vector): number {
        return Math.sqrt(this.sub(vector).dot());
    }

    directionTo(vector): Vector {
        let dist = this.distanceTo(vector);
        return vector.sub(this).div(dist)
    }

    dot(): number {
        return this.x * this.x + this.y * this.y;
    }

    normalize(): Vector {
        return new Vector(this.x / this.length, this.y / this.length)
    }

    clone(): Vector {
        return new Vector(this.x, this.y);
    }

}