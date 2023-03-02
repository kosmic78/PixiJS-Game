import { Container } from 'pixi.js';
import { ControllerInterface } from './interface-controller';
import { InterfaceModel } from '../models/interface-model';
import { ShapeModel } from '../models/shape-model'
import { addShapeToRelevant, createRandomShapeAt, removeShapeToRelevant } from '../shapeFactory';
import { Shape } from '../shapes/shape';

const PIXEL_IN_METER = 10

export class Controller {
    private static instance: Controller;
    shapes: ShapeModel
    interface: InterfaceModel 
    interfaceController: ControllerInterface
    stage: Container
    private constructor(){
        this.shapes = ShapeModel.getInstance()
        this.interfaceController = ControllerInterface.getInstance()
        this.interface = InterfaceModel.getInstance()
    }

    public static getInstance(): Controller {
        if (!Controller.instance) {
            Controller.instance = new Controller();
        }
        return Controller.instance;
    }

    update() {
        const shapes = this.shapes.getAll()
        const gravity = this.interface.getGravity()
        const height = this.interface.getHeight()
        shapes.forEach((shape)=>{
            shape.addSpeed(0,gravity/PIXEL_IN_METER)
            shape.update()
            if(shape.getPositionY()>height){
                this.removeShape(shape)
            }
        })
        if(this.interface.shouldShapeBeGenerated()){
            this.generateRandomShape()
        }
    }
    generateRandomShape(){
        let x = Math.random()*(this.interface.getWidth()-100)
        this.generateRandomShapeAt(x, -50)
    }
    generateRandomShapeAt(x: number, y: number){
        const shape = createRandomShapeAt(x,y)
        if(!shape){
            return
        }
        addShapeToRelevant(this.stage,shape,(shape: Shape)=>this.removeShape(shape))
        this.interfaceController.update()
    }
    removeShape(shape: Shape){
        removeShapeToRelevant(this.stage,shape)
        this.interfaceController.update()
    }
    setStage(stage: Container){
        this.stage = stage
    }
}