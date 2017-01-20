class SoundCaseController{
    constructor(){
    }

    $onChange(changes){
        console.log(changes);
    }
}

export const SoundCase = {
    bindings : {
        case : '<',
        exec : '&'
    },
    template: require('./sound.case.component.html'),
    controller: SoundCaseController
};