class TimeLineController {
    constructor() {

    }
<<<<<<< 86b3888c6630f13e82e47cab855c7d3abdb4c0ba
    $onInit(){
        this.cases=[{id:1},{id:2}];
    }
=======

    $onInit() {
        this.cases = [];
        for (var i = 0; i < 10; i++) {
            cases.push({
                id: i,
                checked: false,
                isPlayed: false
            })
        }


    }
    eventOnChecked(soundCase) {
        return this.cases[soundCases.id] = soundCase;
    }

    playSound() {
        this.cases.map((soundCase) => {
            if (soundCase.checked) {
                //jouer le son du soundcase à l'index


            } else {

            }
        })
    }

    play() {
        if (!this.sound.paused) {
            this.sound.pause();
        }
        this.sound.currentTime = 0;
        this.sound.play();
    }
    pause() {
        if (!this.sound.paused) {
            this.sound.pause();
        }
    }


>>>>>>> creation des fonctions de timeline
}

export const TimeLine = {
    bindings: {
        sound:'<'
    },
    template: require('./time.line.component.html'),
    controller: TimeLineController
}