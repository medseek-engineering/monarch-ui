import angular from 'angular';

import { CreateAudienceComponent } from './create-audience.component';


export const CreateAudienceModule = angular
  .module('monarch.audience.detail.createAudience', [
  ])
  .component('createAudience', CreateAudienceComponent)
  .name;