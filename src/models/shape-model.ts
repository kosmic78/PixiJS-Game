import { Shape } from "../shapes/shape";

export class ShapeModel{
    private static instance: ShapeModel;
    shapes: Shape[]
    private constructor() {
        this.shapes = []
    }

    public static getInstance(): ShapeModel {
        if (!ShapeModel.instance) {
            ShapeModel.instance = new ShapeModel();
        }
        return ShapeModel.instance;
    }

    getAll(){
        return this.shapes
    }

    add(shape: Shape){
        this.shapes.push(shape)
    }

    remove(shape: Shape){
        this.shapes = this.shapes.filter((el: Shape)=> shape!==el)
    }
}