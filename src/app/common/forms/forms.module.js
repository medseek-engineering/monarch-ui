import angular from 'angular';

import {SelectSearchModule} from './select-search/select-search.module'

export const FormsModule = angular
  .module('monarch.forms', [
    SelectSearchModule
  ])
  .name;