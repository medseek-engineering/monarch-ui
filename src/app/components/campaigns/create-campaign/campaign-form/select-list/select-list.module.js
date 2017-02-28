import angular from 'angular';
import { SelectListComponent } from './select-list.component';

export const SelectListModule = angular
  .module('monarch.campaign.create.form.selectList', [
  ])
  .component('selectList', SelectListComponent)
  .name;