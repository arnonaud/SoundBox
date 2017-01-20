class SoundLineController {
    constructor() {
        
    }
     clear(id){
        this.onDelete({$event:id})
    }
    
    //this.sound.vol
}

export const SoundLine = {
    bindings: {
        sound: '<',
        onDelete:'&',
        play:'<'
    },
    template: require('./sound.line.component.html'),
    controller: SoundLineController
}