class SoundLineCaseController{
    constructor(){}
     $onInit(){
        this.title = this.sound.sound.split('/').pop();
    }
}

export const SoundLineCase = {
      bindings:{
        sound:'<'
    },
    template : require('./sound.line.case.component.html'),
    controller :SoundLineCaseController
}