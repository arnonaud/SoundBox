class SoundLineController {
    constructor() {
        
    }
     clear(id){
        this.onDelete({$event:id})
    }
    
}

export const SoundLine = {
    bindings: {
        sound: '<',
        onDelete:'&'
    },
    template: require('./sound.line.component.html'),
    controller: SoundLineController
}