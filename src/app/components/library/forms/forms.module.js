import angular from 'angular';

import { SelectFormModule } from './select-form/select-form.module';

import { forms } from './forms.constant';


export const FormsModule = angular
  .module('monarch.library.forms', [
    SelectFormModule
  ])
  .constant('forms', forms)
  .name;