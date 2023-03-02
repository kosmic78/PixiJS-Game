import { Shape } from "./shape";

export class Circle extends Shape {
    radius: number;
    constructor(x: number, y: number, diameter: number){
        super(x, y)
        this.radius = diameter/2
        this.redraw()
    }
    getArea(): number {
        return Math.pow(this.radius, 2) * Math.PI
    }
    redraw() {
        this.graphics.clear()
        this.graphics.beginFill(this.color)
        this.graphics.lineStyle(2, 0x000000)
        this.graphics.drawCircle(this.radius, this.radius, this.radius)
    }
}