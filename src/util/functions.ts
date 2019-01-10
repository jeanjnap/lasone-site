import { LANGUAGE, LANGUAGES, STRINGS} from './constants';

export class Functions {
    myLanguage = null;
    index: number = 0;

    setLanguage(lang: string) {
        localStorage.setItem(LANGUAGE, lang);
    }

    getLanguage() {
        return new Promise(resolve => {
            //console.log("language: "+localStorage.getItem(LANGUAGE));

            if(localStorage.getItem(LANGUAGE) == undefined){
                //console.log("não definido");
                //console.log(STRINGS[this.index]);
                resolve(STRINGS[this.index]);
            } else {
                this.index = +localStorage.getItem(LANGUAGE);
                //console.log("definido: " + this.index);
                //console.log(STRINGS[this.index]);
                resolve(STRINGS[this.index]);
            }
        });
    }
}