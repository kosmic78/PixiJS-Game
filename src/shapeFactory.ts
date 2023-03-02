import { Container } from "pixi.js";
import { App } from "./app";
import { ShapeModel } from "./models/shape-model";
import { Circle } from "./shapes/circle";
import { Ellipse } from "./shapes/ellipse";
import { Polygon } from "./shapes/polygon";
import { Random } from "./shapes/random";
import { Shape, shapeRemoveFunc } from "./shapes/shape";
import { Square } from "./shapes/square";

export function addShapeToRelevant(stage: Container,shape: Shape, remove: shapeRemoveFunc){
    stage.addChild(shape.getGraphics());
    const model = ShapeModel.getInstance()
    model.add(shape)
    shape.setRemove(remove)
}

export function removeShapeToRelevant(stage: Container, shape: Shape){
    stage.removeChild(shape.getGraphics());
    const model = ShapeModel.getInstance()
    model.remove(shape)
}

export function createRandomShapeAt(x: number,y: number){
    let random = Math.floor(Math.random()*7)
    let shape = null
    switch (random) {
        case 0:
            shape = new Polygon(x,y,50,3)
            break;
        case 1:
            shape = new Square(x,y,50,50)
            break;
        case 2:
            shape = new Polygon(x,y,50,5)
            break;
        case 3:
            shape = new Polygon(x,y,50,6)
            break;
        case 4:
            shape = new Circle(x,y,50)
            break;
        case 5:
            shape = new Ellipse(x,y,100,50)
            break;
        default:
            shape = new Random(x,y,50)
            break;
    }
    return shape
}