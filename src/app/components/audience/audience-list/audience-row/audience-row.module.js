import angular from 'angular';
import { AudienceRowComponent } from './audience-row.component';

export const AudienceRowModule = angular
  .module('monarch.audience.list.row', [
  ])
  .component('audienceRow', AudienceRowComponent)
  .name;