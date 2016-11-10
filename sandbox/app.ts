import domino from '../src/index.ts';


    const app = new domino("#app", {
        value : "une super valeur"
    }, {
        changeValue(value){
            this.value = 2
        }
    });

    const app2 = new domino("#app2", {
        value : "une super valeur 2"
    });



