import angular from 'angular';
import { SidebarComponent } from './sidebar.component';


export const SidebarModule = angular
  .module('monarch.common.sidebar', [

  ])
  .component('monarchSidebar', SidebarComponent)
  .name;