import { Signalable } from "./Signalable";

export class Node<T> extends Signalable {

    private children: Array<T> = [];
    parent: Node<any> = null;

    constructor() {
        super();
    }

    hasChild(_child: T): boolean {
        for (let child of this.children)
            if (child == _child) return true;
        return false;
    }

    addChildAtFirst(child: T): boolean {
        if (!this.hasChild(child)) {
            this.children.splice(0, 0, child);
        }
        return false;
    }

    addChild(child: T): boolean {
        if (!this.hasChild(child)) {
            this.children.push(child);
            this.emit("childAdded", child);
        }
        return false;
    }

    getChild(index): T {
        return this.children[index];
    }

    getChildren(): Array<T> {
        return [...this.children];
    }

}