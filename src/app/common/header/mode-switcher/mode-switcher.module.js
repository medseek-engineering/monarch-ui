import angular from 'angular';
import { ModeSwitcherComponent } from './mode-switcher.component';
import { modesMenu } from './modes-menu.constant';

export const ModeSwitcherModule = angular
  .module('monarch.common.header.modeSwitcher', [

  ])
  .constant('modesMenu', modesMenu)
  .component('modeSwitcher', ModeSwitcherComponent)
  .name;