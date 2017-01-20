class TimeLineController {
    constructor($interval) {
        this.$interval=$interval;
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
        this.audio = new Audio(this.sound.sound);
    }

    $onChanges(changes) {
        console.log('Changes ===>', changes.play.currentValue);
        if (changes.play.currentValue) {
        var a=0;
           this.myInterval = this.$interval(()=>{
               var soundCase =this.cases[a];
               console.log(soundCase.id,soundCase.checked)
               if(soundCase.checked){
                    this.audio.currentTime = 0;
                    this.audio.play();
               }
                a++;
               if(a===10){
                   a=0
                }
           },500)
          
        }
        console.log(this.myInterval);
        if (!changes.play.currentValue) {
            this.$interval.cancel(this.myInterval);
        }
    }

    eventOnCheck(soundCase) {
        //console.log('SoundCase ==>', soundCase);
        this.cases[this.cases.indexOf(soundCase)] = soundCase;

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
        if (!this.audio.paused) {
            this.audio.pause();
        }
        this.audio.currentTime = 0;
        this.audio.play();
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