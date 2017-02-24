import angular from 'angular';
import { DateFilterComponent } from './date-filter.component';


export const DateFilterModule = angular
  .module('monarch.common.dateFilter', [

  ])
  .component('dateFilter', DateFilterComponent)
  .name;