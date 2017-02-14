import angular from 'angular';
import { LeadsListModule } from './leads-list/leads-list.module';
import { LeadsComponent } from './leads.component';

export const LeadsModule = angular
  .module('crm.leads', [
    LeadsListModule
  ])
  .component('leads', LeadsComponent)
  .name;