import angular from 'angular';
import { FacebookCampaignComponent } from './facebook-campaign.component';

export const FacebookCampaignModule = angular
  .module('monarch.campaign.create.form.facebook', [
  ])
  .component('facebookCampaign', FacebookCampaignComponent)
  .name;