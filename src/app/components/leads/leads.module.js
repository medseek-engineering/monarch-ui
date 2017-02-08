import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { LeadsComponent } from './leads.component';

export const LeadsModule = angular
  .module('monarch.leads', [
    uiRouter
  ])
  .component('leads', LeadsComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('leads', {
        title: 'CRM',
        url: '/leads?box&leadId&today&yesterday&twoDaysAgo&threeDaysAgo&add',
        component: 'leads',
        params: {
          box: 'all',
          today: 'true',
          yesterday: 'true'
        }
      });
  })
  .name;