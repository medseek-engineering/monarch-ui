import angular from 'angular';
import { SelectAudienceComponent } from './select-audience.component';


export const SelectAudienceModule = angular
  .module('monarch.lists.createList.selectAudience', [
  ])
  .component('selectAudience', SelectAudienceComponent)
  .name;