import angular from 'angular';

import { AudienceComponent } from './audience.component';


export const AudienceModule = angular
  .module('monarch.campaign.create.form.audience', [
  ])
  .component('campaignAudience', AudienceComponent)
  .name;