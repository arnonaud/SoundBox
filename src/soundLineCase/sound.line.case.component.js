import css from './sound.line.case.component.css';

class SoundLineCaseController{
    constructor(){}
     $onInit(){
        this.title = this.sound.sound.split('/').pop();
     }

    clear(){
        this.onDelete()
    }

    changeVolume(){
        console.log(this.sound.vol);
    }
}

export const SoundLineCase = {
      bindings:{
        sound:'<',
        onDelete:'&'
    },
    template : require('./sound.line.case.component.html'),
    controller :SoundLineCaseController
}