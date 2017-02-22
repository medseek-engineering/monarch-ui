import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { CRMHeaderModule } from './crm-header/crm-header.module';
import { CRMSidebarModule } from './crm-sidebar/crm-sidebar.module';
import { LeadsModule } from './leads/leads.module';
import { CRMComponent } from './crm.component';

export const CRMModule = angular
  .module('monarch.crm', [
    uiRouter,
    CRMHeaderModule,
    CRMSidebarModule,
    LeadsModule
  ])
  .component('crm', CRMComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('crm', {
        title: 'CRM',
        url: '/crm',
        component: 'crm',
        redirectTo: 'crm.leads'
      })
      .state('crm.leads', {
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