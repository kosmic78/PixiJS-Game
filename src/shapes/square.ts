import { Shape } from "./shape";

export class Square extends Shape {
    width: number;
    height: number;
    constructor(x: number, y: number, width: number, height: number){
        super(x,y)
        this.width = width
        this.height = height
        this.redraw()
    }
    getArea(): number {
        return this.width * this.height
    }
    redraw() {
        this.graphics.clear()
        this.graphics.beginFill(this.color);
        this.graphics.lineStyle(2, 0x000000);
        this.graphics.drawRect(0, 0, this.width, this.height);
    }
}