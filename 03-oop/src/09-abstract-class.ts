abstract class Shape {
    protected constructor(protected color: string) {
        this.color = color;
    }

    abstract getArea(): number;
}

/*
Circle with property

o radius: number

· Rectangle with properties:

o sideA: number

o sideB: number
 */
class Circle extends Shape {
    constructor (color: string, private radius: number) {
        super(color);
        this.radius = radius;
    }

    getArea(): number {
        return Math.pow(this.radius, 2) * Math.PI;
    }
}

class Rectangle extends Shape {
    constructor(color: string, private sideA: number, private sideB: number) {
        super(color);
        this.sideA = sideA;
        this.sideB = sideB;
    }

    getArea(): number {
        return this.sideA * this.sideB;
    }
}

const circle = new Circle("red", 5);
console.log(circle.getArea());

const rectangle = new Rectangle("blue", 4, 6);
console.log(rectangle.getArea());