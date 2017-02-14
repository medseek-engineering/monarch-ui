import angular from 'angular';
import { LeadsListComponent } from './leads-list.component';

export const LeadsListModule = angular
  .module('crm.leadsList', [
  ])
  .component('leadsList', LeadsListComponent)
  .name;