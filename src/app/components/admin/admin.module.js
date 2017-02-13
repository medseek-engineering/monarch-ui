import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AdminComponent } from './admin.component';


export const AdminModule = angular
  .module('monarch.admin', [
    uiRouter
  ])
  .component('admin', AdminComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('admin', {
        title: 'Admin',
        url: '/admin',
        component: 'admin'
      });
  })
  .name;