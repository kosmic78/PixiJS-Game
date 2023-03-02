import { Shape } from "../shapes/shape";

export class InterfaceModel{

    private static instance: InterfaceModel;
    gravity: number = 10
    shapesPerSecound: number = 2
    nextShapeGenerate: number = 0
    width: number;
    height: number;
    private constructor() {
    }

    public static getInstance(): InterfaceModel {
        if (!InterfaceModel.instance) {
            InterfaceModel.instance = new InterfaceModel();
        }
        return InterfaceModel.instance;
    }
    getGravity(){
        return this.gravity
    }
    setGravity(gravity: number){
        this.gravity = gravity
    }
    shouldShapeBeGenerated(){
        if(this.shapesPerSecound == 0){
            return
        }
        let now = +(new Date())
        if(this.nextShapeGenerate<now){
            this.nextShapeGenerate = now+(1000/this.shapesPerSecound)
            return true;
        }
        return false;
    }
    getShapeRate() {
        return this.shapesPerSecound
    }
    setShapeRate(shapesPerSecound: number){
        this.shapesPerSecound = shapesPerSecound
    }
    setResolution(width:number,height:number){
        this.width = width
        this.height = height
    }
    getWidth() {
        return this.width
    }
    getHeight() {
        return this.height
    }
}