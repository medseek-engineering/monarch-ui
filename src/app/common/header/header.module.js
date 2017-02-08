import angular from 'angular';
import { HeaderComponent } from './header.component';
import { ModeSwitcherModule } from './mode-switcher/mode-switcher.module';

export const HeaderModule = angular
  .module('monarch.common.header', [
    ModeSwitcherModule
  ])
  .component('monarchHeader', HeaderComponent)
  .name;