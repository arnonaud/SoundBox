class PlayBoxController{
    constructor(){}
    $onInit(){
    }
   
}
export const PlayBox = {
    bindings:{
        play:'=',
        bpm:'='
    },
    template: require('./play.box.component.html'),
    controller:PlayBoxController
}