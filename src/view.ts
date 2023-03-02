import { gravityValueElement, shapeRateElement, shapesAreaElement, shapesCountElement } from "./pageDOM"

export interface ViewModel {
    count: number,
    area: number,
    shapeRate: number,
    gravity: number,
}

export class View implements ViewModel{
    count: number
    area: number
    shapeRate: number
    gravity: number
    update({
        count,
        area,
        shapeRate,
        gravity
    }: ViewModel){
        if(count!==this.count){
            this.count = count
            shapesCountElement.innerHTML='Number of current shapes: ' + count
        }
        if(area!==this.area){
            this.area = area
            shapesAreaElement.innerHTML='Surface area ocupied by shapes: ' + area.toFixed(2)
        }
        if(shapeRate!==this.shapeRate){
            this.shapeRate = shapeRate
            shapeRateElement.innerHTML='Number of shapes per second: ' + shapeRate
        }
        if(gravity!==this.gravity){
            this.gravity = gravity
            gravityValueElement.innerHTML='Gravity value: ' + gravity
        }
    }
}