"use strict";
class CircleArea {
    constructor(_name, _color, _description, _radius) {
        this.name = _name;
        this.color = _color;
        this.description = _description;
        this.radius = _radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class RectangleArea {
    constructor(_name, _color, _description, _length, _width) {
        this.name = _name;
        this.color = _color;
        this.description = _description;
        this.length = _length;
        this.width = _width;
    }
    calculateArea() {
        return this.length * this.width;
    }
}
class Area {
    constructor(shape) {
        this.shape = shape;
    }
    AreaOfShape() {
        return this.shape.calculateArea();
    }
}
const area = new Area(new CircleArea("Circle", "green", "A round shape", 4));
const area1 = new Area(new RectangleArea("Rectangle", "red", "A rectangular shape", 4, 6));
console.log(` Color: ${area.shape.color} ,Area: ${area.AreaOfShape()} square units,  Description: ${area.shape.description}`);
console.log(`  Color: ${area1.shape.color} ,Area: ${area1.AreaOfShape()} square units, Description: ${area1.shape.description}`);
