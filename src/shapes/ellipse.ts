import { Shape } from "./shape";

export class Ellipse extends Shape {
    width: number;
    height: number;
    constructor(x: number, y: number, diameterW: number, diameterH: number){
        super(x,y)
        this.width = diameterW
        this.height = diameterH
        this.redraw()
    }
    getArea(): number {
        return this.width/2 * this.height/2 * Math.PI
    }
    redraw() {
        this.graphics.clear()
        const radiusA = this.width/2
        const radiusB = this.height/2
        this.graphics.beginFill(this.color);
        this.graphics.lineStyle(2, 0x000000);
        this.graphics.drawEllipse(radiusA, radiusB, radiusA, radiusB);
    }
}