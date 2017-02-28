import angular from 'angular';

import { SelectPhoneNumberModule } from './select-phone-number/select-phone-number.module';

import { phoneNumbers } from './phone-numbers.constant';


export const PhoneNumbersModule = angular
  .module('monarch.library.phoneNumbers', [
    SelectPhoneNumberModule
  ])
  .constant('phoneNumbers', phoneNumbers)
  .name;