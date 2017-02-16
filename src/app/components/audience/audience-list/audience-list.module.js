import angular from 'angular';
import { AudienceListComponent } from './audience-list.component';

import { audiences } from './audiences.constant';

export const AudienceListModule = angular
  .module('monarch.audience.list', [
  ])
  .constant('audiences', audiences)
  .component('audienceList', AudienceListComponent)
  .name;