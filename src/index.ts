///
import Renderer from './renderer.ts';
import Observable from './observable.ts';

export default class Domino{
    private rendered : any;
    public data : Observable;
    //private data : Object;
    /**
     * Creates an instance of Domino.
     * 
     * @param {string} element
     * @param {Object} data
     * @param {Object} methods
     * 
     * @memberOf Domino
     */
    constructor(element:string, data:Object, methods?:Object){
        this.rendered = new Renderer(element);
        this.data = new Observable(data, this.react.bind(this));
        // initial rendering
        this.react();
    }
    /**
     * 
     * 
     * @private
     * 
     * @memberOf Domino
     */
    private react(){
        this.rendered.render(this.data.value());
    }
}