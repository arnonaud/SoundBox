import angular from 'angular';
import {SoundLine} from './soundLine/sound.line.component';

angular.module('app', [])
.component('soundLine',SoundLine)

.run( function() {
  console.log('SOUNDBOX !');
})