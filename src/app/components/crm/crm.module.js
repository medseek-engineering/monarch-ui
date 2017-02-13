import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { CRMComponent } from './crm.component';

export const CRMModule = angular
  .module('monarch.crm', [
    uiRouter
  ])
  .component('crm', CRMComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('crm', {
        title: 'CRM',
        url: '/crm?box&leadId&today&yesterday&twoDaysAgo&threeDaysAgo&add',
        component: 'crm',
        params: {
          box: 'all',
          today: 'true',
          yesterday: 'true'
        }
      });
  })
  .name;