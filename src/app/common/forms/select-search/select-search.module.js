import angular from 'angular';

import {SelectSearchComponent} from './select-search.component';

export const SelectSearchModule = angular
  .module('monarch.forms.selectSearch', [
  ])
  .component('selectSearch', SelectSearchComponent)
  .name;