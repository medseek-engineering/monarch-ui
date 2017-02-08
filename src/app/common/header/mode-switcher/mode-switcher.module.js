import angular from 'angular';
import { ModeSwitcherComponent } from './mode-switcher.component';

export const ModeSwitcherModule = angular
  .module('monarch.common.header.modeSwitcher', [

  ])
  .component('modeSwitcher', ModeSwitcherComponent)
  .name;