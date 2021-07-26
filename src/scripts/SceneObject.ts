import { Renderer } from "../Renderer";
import { Node } from "./Node";
import { Scene } from "./Scene";
import { Vector } from "./Vector";

export abstract class SceneObject extends Node<SceneObject> {

    private _scene: Scene;
    private absolute_position: Vector = Vector.ZERO;

    private _zOrder: number = 0;

    get position(): Vector {
        if (this.parent instanceof SceneObject)
            return this.parent.position.add(this.absolute_position);
        return this.absolute_position;
    }
    set position(value: Vector) {
        this.absolute_position = value;
    }
    get scene(): Scene {
        return this._scene;
    }
    get zOrder(): number {
        return this._zOrder;
    }
    set zOrder(value) {
        this._zOrder = value;
        this.scene.updateZOrder(this);
    }
    set scene(value: Scene) {
        this._scene.removeChild(this);
        value.addChild(this);
        value.updateZOrder(this);
        this._scene = value;
    }

    constructor() {
        super();
    }

    abstract render(renderer: Renderer): void;

}