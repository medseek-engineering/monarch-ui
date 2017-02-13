import angular from 'angular';
import { CRMSidebarComponent } from './crm-sidebar.component';

export const CRMSidebarModule = angular
  .module('crm.sidebar', [
  ])
  .component('crmSidebar', CRMSidebarComponent)
  .name;