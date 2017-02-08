import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { DashboardComponent } from './dashboard.component';

export const DashboardModule = angular
  .module('monarch.dashboard', [
    uiRouter
  ])
  .component('dashboard', DashboardComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('dashboard', {
        title: 'Dashboard',
        url: '/dashboard',
        component: 'dashboard'
      });
    $urlRouterProvider.otherwise('/dashboard');
  })
  .name;