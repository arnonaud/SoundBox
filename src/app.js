import angular from 'angular';
import {SoundBox} from './soundBox/sounds.box.component';
import {SoundLineCase} from './soundLineCase/sound.line.case.component';
import {SoundLine} from './soundLine/sound.line.component';
import {TimeLine} from './time/time.line.component';
import {SoundCase} from './soundCase/sound.case.component';

angular.module('app', [])
.component('soundBox',SoundBox)
.component('soundLine',SoundLine)
.component('soundLineCase',SoundLineCase)
.component('timeLine',TimeLine)
.component('soundCase',SoundCase)

.run( function() {
  console.log('SOUNDBOX !');
})