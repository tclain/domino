import domino from '../src';

export default function app(){
    const app = new domino("#app", {
        value : "test"
    }, {
        changeValue(value){
            this.value = 2
        }
    });
}