import angular from 'angular';

import { ContentComponent } from './content.component';


export const ContentModule = angular
  .module('monarch.campaign.create.form.content', [
  ])
  .component('campaignContent', ContentComponent)
  .name;