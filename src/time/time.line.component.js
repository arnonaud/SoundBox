class TimeLineController {
    constructor($interval) {
        this.$interval=$interval;
        this.a = 0;
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
        if(changes.bpm && changes.bpm.currentValue){
           if(changes.bpm.currentValue !== changes.bpm.previousValue){
               this.$interval.cancel(this.myInterval);
               this.launch();
           } 
         
        }
        if (changes.play && changes.play.currentValue) {

          this.launch();
        }
     
        if (changes.play && !changes.play.currentValue) {
            this.$interval.cancel(this.myInterval);
        }
    }

    launch() {
           this.myInterval = this.$interval(()=>{
               var soundCase =this.cases[this.a];
               if(soundCase.checked){
                    this.audio.currentTime = 0;
                    this.audio.play();
               }
                this.a++;
               if(this.a===10){
                   this.a=0
                }
           },(60000/this.bpm))        
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
        case: '<',
        bpm:'<'
    },
    template: require('./time.line.component.html'),
    controller: TimeLineController
}