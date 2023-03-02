import { Application } from "pixi.js";
import { Controller } from "./controllers/shape-controller";
import { ControllerInterface } from "./controllers/interface-controller";
import { appContainerElement } from "./pageDOM";

export class App {
    pixi: Application
    constructor() {
        this.pixi = new Application({ 
            resizeTo: appContainerElement,
            antialias: true,
            backgroundColor: 0xFFFFFF
         });
        appContainerElement.appendChild(this.pixi.view as HTMLCanvasElement)
        // create interface controller and set relevant information
        const controllerInterface = ControllerInterface.getInstance()
        controllerInterface.setResolution(this.pixi.renderer.width,this.pixi.renderer.height)
        // @ts-ignore
        this.pixi.renderer.on('resize', (width: number, height: number) => {
            controllerInterface.setResolution(width,height)
        })

        // create main controller
        const controller = Controller.getInstance()
        const stage = this.getStage();
        controller.setStage(stage)

        // setup the maing game loop
        this.pixi.ticker.maxFPS = 60
        this.pixi.ticker.add(() => {
            controller.update()
        });
        
        // setup the create event
        // @ts-ignore
        stage.interactive = true;
        // @ts-ignore
        stage.hitArea = this.pixi.screen;
        // @ts-ignore
        stage.on('pointerdown', (ev)=>{
            const {x,y} = ev.data.global;
            controller.generateRandomShapeAt(
                x,
                y)
        });
        
    }

    getStage(){
        return this.pixi.stage;
    }

}

