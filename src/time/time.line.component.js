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
    eventOnCheck(soundCase) {
        console.log('SoundCase ==>', soundCase);
        return this.cases[soundCases.id] = soundCase;

    }

    playSound() {
        this.cases.map((soundCase) => {
            if (soundCase.checked) {
                cases[soundCase.id].isPlayed = true;
                play();

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