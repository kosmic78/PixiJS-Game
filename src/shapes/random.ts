import { Shape } from "./shape";

export class Random extends Shape {
    radius: number;
    sides: number;
    constructor(x: number, y: number, diameter: number){
        super(x, y)
        this.radius = diameter/2
        this.sides = 6
        this.redraw()
    }
    getArea(): number {
        // same as polygon aproximately radiuos 3/4
        return this.sides *
        Math.pow(this.radius / 4 * 3, 2) / 2 *
        Math.sin(2 * Math.PI / this.sides)
    }
    redraw() {
        this.graphics.clear()
        this.graphics.beginFill(this.color)
        this.graphics.lineStyle(2, 0x000000)
        this.graphics.drawStar(0,0,this.sides,this.radius, this.radius / 2, Math.PI / 6)
        this.graphics.closePath();
        this.graphics.endFill();
    }
}