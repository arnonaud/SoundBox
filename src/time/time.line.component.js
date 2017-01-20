class TimeLineController {
    constructor() {

    }
    $onInit(){
        this.cases=[{id:1},{id:2}];
    }
}

export const TimeLine = {
    bindings: {
        sound:'<'
    },
    template: require('./time.line.component.html'),
    controller: TimeLineController
}