import angular from 'angular';
import { AudienceDetailComponent } from './audience-detail.component';
import { filterTypeData } from './audience-filters.constant';

import { filterTypes } from './audience-filter-types.constant';

export const AudienceDetailModule = angular
  .module('monarch.audience.detail', [
  ])
  .constant('filterTypeData', filterTypeData)
  .constant('filterTypes', filterTypes)
  .component('audienceDetail', AudienceDetailComponent)
  .name;