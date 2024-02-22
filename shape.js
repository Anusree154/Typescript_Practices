"use strict";
class Shape {
}
class Circle extends Shape {
    constructor(_radius) {
        super();
        this.radius = _radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(_length, _width) {
        super();
        this.length = _length;
        this.width = _width;
    }
    calculateArea() {
        return this.length * this.width;
    }
}
const circle = new Circle(4);
const rectangle = new Rectangle(4, 5);
let AreaOfCircle = circle.calculateArea();
console.log("Area of the circle ", AreaOfCircle);
let AreaOfRectangle = rectangle.calculateArea();
console.log("Area of Rectangle ", AreaOfRectangle);
