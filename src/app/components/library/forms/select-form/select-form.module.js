import angular from 'angular';

import { SelectFormComponent } from './select-form.component';

export const SelectFormModule = angular
  .module('monarch.library.forms.selectForm', [
  ])
  .component('selectForm', SelectFormComponent)
  .name;