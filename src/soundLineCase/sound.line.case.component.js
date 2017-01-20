import css from './sound.line.case.component.css';

class SoundLineCaseController{
    constructor(){}
     $onInit(){
        this.title = this.sound.sound.split('/').pop();
     }

    clear(){
        console.log("clear sound-linr case");
    }
}

export const SoundLineCase = {
      bindings:{
        sound:'<'
    },
    template : require('./sound.line.case.component.html'),
    controller :SoundLineCaseController
}