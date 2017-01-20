class SoundBoxController{
    constructor(){}
    $onInit(){
        this.sounds = [
            {sound:'./sounds/crash-acoustic.wav',id:1},
            {sound:'./sounds/kick-dry.wav',id:2},
            {sound:'./sounds/openhat-tight.wav',id:3},
            {sound:'./sounds/tom-rototom.wav',id:4}
        ]
        this.play=false;
        this.bpm=100;
    }
    clearSound(id){
        this.sounds = this.sounds.filter(s => s.id !== id);
    }
}
export const SoundBox = {
    template : require('./sounds.box.component.html'),
    controller :SoundBoxController
}