import angular from 'angular';
import { CRMHeaderComponent } from './crm-header.component';

export const CRMHeaderModule = angular
  .module('crm.header', [
  ])
  .component('crmHeader', CRMHeaderComponent)
  .name;