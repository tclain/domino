import {startsWith} from './utils.ts';

export default class Renderer{
    private dom : any;
    private template : string;
    private isMultiple : boolean;
    /**
     * Creates an instance of Renderer.
     * 
     * @param {string} selector
     * 
     * @memberOf Renderer
     */
    constructor(selector:string){
        const isCssId = startsWith(selector, '\#');
        this.dom = isCssId ? document.querySelector(selector) : document.querySelectorAll(selector) ;
        this.isMultiple = isCssId;
        this.template = this.dom.innerHTML;

        // bind methods
        this.render = this.render.bind(this);
        this.interpolate = this.interpolate.bind(this); 
    }
    
    
    /**
     * rerender the dom Element with Data inside
     * 
     * @param {Object} data
     * 
     * @memberOf Renderer
     */
    public render(data:Object) : void { 
        this.dom.innerHTML = this.interpolate(this.template, data);
    }
    /**
     * 
     * 
     * @private
     * @param {string} str
     * @param {Object} data
     * @returns {string} 
     * 
     * @memberOf Renderer
     */
    private interpolate(str:string, data:Object) : string{
        for (let key in data){     
            str = str.replace(`{{${key}}}`, data[key])
        }
        // replace {{vars}}
        str = str.replace(/\\{\\{.*\\}\\}/, "");
        return str;
    }
}
