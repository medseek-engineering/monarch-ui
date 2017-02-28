import angular from 'angular';

import { SelectPhoneNumberComponent } from './select-phone-number.component';

export const SelectPhoneNumberModule = angular
  .module('monarch.library.phoneNumbers.select', [
  ])
  .component('selectPhoneNumber', SelectPhoneNumberComponent)
  .name;