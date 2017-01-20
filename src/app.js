import angular from 'angular';
import {SoundBox} from './soundBox/sounds.box.component';
import {SoundLineCase} from './soundLineCase/sound.line.case.component';
import {SoundLine} from './soundLine/sound.line.component';

angular.module('app', [])
.component('soundBox',SoundBox)
.component('soundLine',SoundLine)
.component('soundLineCase',SoundLineCase)

.run( function() {
  console.log('SOUNDBOX !');
})