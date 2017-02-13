import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { CRMHeaderModule } from './crm-header/crm-header.module';
import { CRMSidebarModule } from './crm-sidebar/crm-sidebar.module';
import { LeadsListModule } from './leads-list/leads-list.module';
import { CRMComponent } from './crm.component';

export const CRMModule = angular
  .module('monarch.crm', [
    uiRouter,
    CRMHeaderModule,
    CRMSidebarModule,
    LeadsListModule
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