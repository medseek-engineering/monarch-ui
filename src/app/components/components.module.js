import angular from 'angular';
import { DashboardModule } from './dashboard/dashboard.module';
import { LeadsModule } from './leads/leads.module';

export const ComponentsModule = angular
  .module('monarch.components', [
    DashboardModule,
    LeadsModule
  ])
  .name;