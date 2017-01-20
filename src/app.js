import angular from 'angular';
import {SoundBoxController} from './sounds.box.controller';

angular.module('app', [])
.controller("soundBoxController",SoundBoxController)

.run( function() {
  console.log('SOUNDBOX !');
})