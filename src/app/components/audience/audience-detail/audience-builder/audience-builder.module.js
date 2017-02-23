import angular from 'angular';
import { AudienceBuilderComponent } from './audience-builder.component';
import { filterTypeData } from './audience-filters.constant';

import { filterTypes } from './audience-filter-types.constant';

export const AudienceBuilderModule = angular
  .module('monarch.audience.detail.audienceBuilder', [
  ])
  .constant('filterTypeData', filterTypeData)
  .constant('filterTypes', filterTypes)
  .component('audienceBuilder', AudienceBuilderComponent)
  .name;