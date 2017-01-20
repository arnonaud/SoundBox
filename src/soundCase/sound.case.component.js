import css from './sound.case.component.css';

class SoundCaseController{
    constructor(){
    }
    check(){
        let sCase = angular.copy(this.case);
        this.onCheck({
            $event: sCase
        });
        return sCase.isChecked;
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