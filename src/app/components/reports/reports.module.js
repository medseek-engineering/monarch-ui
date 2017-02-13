import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { ReportsComponent } from './reports.component';


export const ReportsModule = angular
  .module('monarch.reports', [
    uiRouter
  ])
  .component('reports', ReportsComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('reports', {
        title: 'Reports',
        url: '/reports',
        component: 'reports'
      });
  })
  .name;