import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { CampaignsComponent } from './campaigns.component';

import { CampaignsListModule } from './campaigns-list/campaigns-list.module';
import { CreateCampaignModule } from './create-campaign/create-campaign.module';

export const CampaignsModule = angular
  .module('monarch.campaigns', [
    uiRouter,
    CampaignsListModule,
    CreateCampaignModule
  ])
  .component('campaigns', CampaignsComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('campaigns', {
        title: 'Campaigns',
        url: '/campaigns',
        component: 'campaigns',
        redirectTo: 'campaigns.list'
      })
      .state('campaigns.list', {
        title: 'Campaigns',
        url: '/?channel',
        hidePageHeader: true,
        component: 'campaignsList',
        params: {
          channel: 'all'
        }
      });
  })
  .name;