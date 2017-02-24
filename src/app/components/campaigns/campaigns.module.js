import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { CampaignsComponent } from './campaigns.component';

import { CampaignsListModule } from './campaigns-list/campaigns-list.module';

export const CampaignsModule = angular
  .module('monarch.campaigns', [
    uiRouter,
    CampaignsListModule
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
      })
      .state('campaigns.create', {
        title: 'Campaigns',
        url: '/create',
        component: 'campaignsList'
      });
  })
  .name;