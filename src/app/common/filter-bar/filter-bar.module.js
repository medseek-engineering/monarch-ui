import angular from 'angular';
import { FilterBarComponent } from './filter-bar.component';


export const FilterBarModule = angular
  .module('monarch.common.filterBar', [

  ])
  .component('filterBar', FilterBarComponent)
  .name;