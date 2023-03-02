import { InterfaceModel } from '../models/interface-model';
import { gravityAddElement, gravitySubtractElement, shapeRateAddElement, shapeRateSubtractElement } from '../pageDOM';
import { ShapeModel } from '../models/shape-model'
import { View, ViewModel } from '../view';
export class ControllerInterface {
    private static instance: ControllerInterface;
    shapes: ShapeModel
    interface: InterfaceModel
    view: View
    private constructor(){
        this.view =  new View()
        this.interface = InterfaceModel.getInstance()
        this.shapes = ShapeModel.getInstance()
        shapeRateAddElement.addEventListener("click", ()=>this.addRate());

        shapeRateSubtractElement.addEventListener("click", ()=>this.subtractRate());

        gravityAddElement.addEventListener("click", ()=>this.addGravity());

        gravitySubtractElement.addEventListener("click", ()=>this.subtractGravity());
    }

    public static getInstance(): ControllerInterface {
        if (!ControllerInterface.instance) {
            ControllerInterface.instance = new ControllerInterface();
        }
        return ControllerInterface.instance;
    }

    update() {
        const shapes = this.shapes.getAll()
        const count = shapes.length;
        const gravity = this.interface.getGravity()
        const shapeRate = this.interface.getShapeRate()
        let  area = 0;
        shapes.forEach((shape)=>{
            area += shape.getArea()
        })
        const viewModel = {count, gravity, shapeRate, area} as ViewModel
        this.view.update(viewModel)
    }

    addGravity(){
        const gravity = this.interface.getGravity() + 1
        this.interface.setGravity(gravity)
        this.update()
    }

    subtractGravity(){
        const gravity = this.interface.getGravity() - 1
        this.interface.setGravity(gravity)
        this.update()
    }
    
    addRate() {
        const rate = this.interface.getShapeRate() + 1
        this.interface.setShapeRate(rate)
        this.update()
    }

    subtractRate() {
        const rate = this.interface.getShapeRate() - 1
        if(rate < 0){
            return
        }
        this.interface.setShapeRate(rate)
        this.update()
    }
    setResolution(width:number,height:number){
        this.interface.setResolution(width, height)
    }
    getWidth() {
        return this.interface.getWidth()
    }
    getHeight() {
        return this.interface.getHeight()
    }

}