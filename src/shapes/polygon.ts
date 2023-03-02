import { Shape } from "./shape";

type AllowableValues = 3 | 4 | 5 | 6

export class Polygon extends Shape {
    radius: number;
    sides: number;
    constructor(x: number, y: number, diameter: number, sides: AllowableValues){
        super(x,y)
        this.radius = diameter/2
        this.sides = sides as number
        this.redraw()
    }
    getArea(): number {
        return this.sides *
        Math.pow(this.radius,2)/ 2 *
        Math.sin(2 * Math.PI / this.sides)
    }
    redraw() {
        this.graphics.clear()
        const angleStep = 2*Math.PI/this.sides
        let angle = -angleStep / 2 + Math.PI / 2;
        this.graphics.beginFill(this.color)
        this.graphics.lineStyle(2, 0x000000)
        const tx = Math.cos(angle)*this.radius+this.radius
        const ty = Math.sin(angle)*this.radius+this.radius
        this.graphics.moveTo(tx, ty);
        for(let i=1;i<this.sides;i++){
            angle+=angleStep
            const tx = Math.cos(angle)*this.radius+this.radius
            const ty = Math.sin(angle)*this.radius+this.radius
            this.graphics.lineTo(tx, ty);
        }
        this.graphics.closePath();
        this.graphics.endFill();
    }
}