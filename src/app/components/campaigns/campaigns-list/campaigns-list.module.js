import angular from 'angular';
import { CampaignsListComponent } from './campaigns-list.component';
import { campaigns } from './campaigns.constant';
import { campaignTypes } from './campaign-types.constant';

export const CampaignsListModule = angular
  .module('monarch.campaigns.list', [
  ])
  .component('campaignsList', CampaignsListComponent)
  .constant('campaigns', campaigns)
  .constant('campaignTypes', campaignTypes)
  .name;