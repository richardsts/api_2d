import { SceneObject } from "./SceneObject";
import { Node } from "./Node";
import { Renderer } from "../Renderer";
import { Scene } from "./Scene";

class A extends SceneObject {

    constructor() {
        super();
    }

    render(renderer: Renderer): void {
        renderer.fill(255);
        renderer.rect(100, 100, 50, 50);
    }

}

new p5((p5: Renderer) => {

    let scn = new Scene(p5);

    scn.addChild(new A());

    p5.setup = function () {
        p5.createCanvas(500, 500);



    }

    p5.draw = function () {
        p5.background(0);

        scn.render();

    }

});