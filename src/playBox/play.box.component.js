class PlayBoxController{
    constructor(){}
    $onInit(){
    }
   
}
export const PlayBox = {
    bindings:{
        play:'='
    },
    template: require('./play.box.component.html'),
    controller:PlayBoxController
}