class SoundCaseController{
    constructor(){
    }

    $onChange(changes){
        let sCase = angular.copy(this.case);
        this.onCheck({
            $event: sCase
        });
    }
}

export const SoundCase = {
    bindings : {
        case : '<',
        onCheck : '&'
    },
    template: require('./sound.case.component.html'),
    controller: SoundCaseController
};