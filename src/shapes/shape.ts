import { Graphics } from "pixi.js";
import { generateRandomColor } from "../palette";

export type shapeRemoveFunc = (shape: Shape)=>void

export class Shape{
    protected graphics: Graphics;
    speedX: number
    speedY: number
    color: number
    constructor(x: number, y: number){
        this.graphics = new Graphics();
        this.graphics.x = x;
        this.graphics.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.color = generateRandomColor()
    }
    public getArea?():number
    public redraw?():void
    public getGraphics(){
        return this.graphics
    }
    public getSpeedX(){
        return this.speedX
    }
    public getSpeedY(){
        return this.speedY
    }
    public setSpeedX(speed: number){
        this.speedX = speed
    }
    public setSpeedY(speed: number){
        this.speedY = speed
    }
    public addSpeed(x: number, y: number){
        this.speedX += x
        this.speedY += y
    }
    public getPositionX(){
        return this.graphics.x
    }
    public getPositionY(){
        return this.graphics.y
    }
    public setPosition(x: number,y: number){
        this.graphics.x = x
        this.graphics.y = y
    }
    public update(){
        this.graphics.x += this.speedX / 60.0;
        this.graphics.y += this.speedY / 60.0;
    }
    public setRemove(remove: shapeRemoveFunc){
        // @ts-ignore
        this.graphics.interactive = true;
        // @ts-ignore
        this.graphics.cursor = 'pointer';
        // @ts-ignore
        this.graphics.on('pointerdown',(ev)=>{
            ev.stopPropagation();
            remove(this)
        });
    }
}