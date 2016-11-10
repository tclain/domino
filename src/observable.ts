import './lib/proxy-polyfill.js';

declare type Proxy = any;

export default class Observable {
    public data: Object;
    /**
     * Creates an instance of Observable.
     * 
     * @param {Object} object
     * @param {Function} onChange callback called when the object changed
     * 
     * @memberOf Observable
     */
    constructor(object: Object, onChange: Function) {
        this.data = this.buildFromObject(object, onChange);
    }
    /**
     * 
     * 
     * @param {Object} object
     * @returns
     * 
     * @memberOf Observable
     */
    private buildFromObject(object: Object, callback: Function) {
        return new Proxy(object, {
            set(target, property, value) {
                // notify of change
                callback(property, value);
                target[property] = value;
                return true;
            }
        })
    }
    /**
     * 
     * snapshot value
     * 
     * @returns
     * 
     * @memberOf Observable
     */
    public value() : Object {
        return this.data;
    }
}