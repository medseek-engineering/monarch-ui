import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { CampaignsComponent } from './campaigns.component';


export const CampaignsModule = angular
  .module('monarch.campaigns', [
    uiRouter
  ])
  .component('campaigns', CampaignsComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('campaigns', {
        title: 'Campaigns',
        url: '/campaigns',
        component: 'campaigns'
      });
  })
  .name;