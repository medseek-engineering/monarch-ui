import angular from 'angular';

import { AudienceRowModule } from './audience-row/audience-row.module';


import { AudienceListComponent } from './audience-list.component';


import { audiences } from './audiences.constant';

export const AudienceListModule = angular
  .module('monarch.audience.list', [
    AudienceRowModule
  ])
  .constant('audiences', audiences)
  .component('audienceList', AudienceListComponent)
  .name;