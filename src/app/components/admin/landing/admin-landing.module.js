import angular from 'angular';
import { AdminLandingComponent } from './admin-landing.component';

export const AdminLandingModule = angular
  .module('monarch.admin.landing', [

  ])
  .component('adminLanding', AdminLandingComponent)
  .name;