class TimeLineController {
    constructor() {

    }

    $onInit() {
        this.cases = [];
        for (var i = 0; i < 10; i++) {
            this.cases.push({
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
            cases[soundCase.id].isPlayed = true;

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
}

export const TimeLine = {
    bindings: {
        sound: '<',
        play: '<',
        case: '<'
    },
    template: require('./time.line.component.html'),
    controller: TimeLineController
}