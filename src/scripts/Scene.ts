import { Renderer } from "../Renderer";
import { Node } from "./Node";
import { SceneObject } from "./SceneObject";
import { Signal } from "./Signal";

export class Scene extends Node<SceneObject> {

    renderer: Renderer;
    private childrenOrder: Object = {};

    constructor(renderer: Renderer) {
        super();

        this.on(new Signal("childAdded", (child) => {
            if (!this.childrenOrder[0])
                this.childrenOrder[0] = []
            this.childrenOrder[0].push(child);
        }));

        this.renderer = renderer;
    }

    updateZOrder(child: SceneObject): boolean {
        let id = this.childrenOrder[child.zOrder].indexOf(child);
        if (id !== -1) {
            this.childrenOrder[child.zOrder].splice(id, 1);
            this.childrenOrder[child.zOrder].push(child);
            return true;
        }
        return false;
    }

    removeChild(child: SceneObject): boolean {
        let id = this.childrenOrder[child.zOrder].indexOf(child);
        if (id) {
            this.childrenOrder[child.zOrder].splice(id, 1);
            return true;
        }
        return false;
    }

    render(): void {
        let zOrders = Object.keys(this.childrenOrder).sort((a, b) => Number(a) - Number(b));
        // console.log(zOrders)
        for (let zOrder of zOrders) {
            for (let child of this.getChildren()) {
                child.render(this.renderer);
            }
        }
    }

}