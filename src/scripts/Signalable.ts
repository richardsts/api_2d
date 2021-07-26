import { Signal } from "./Signal";


export class Signalable {

    protected sorter: Function = null;
    protected signals: Object = {};

    on(signal: Signal) {
        if (!this.signals[signal.key])
            this.signals[signal.key] = {};
        if(!this.signals[signal.key][signal.zOrder])
            this.signals[signal.key][signal.zOrder] = []
        this.signals[signal.key][signal.zOrder].push(signal);
    }

    protected emit(key: string, ...args) {
        
    }

}