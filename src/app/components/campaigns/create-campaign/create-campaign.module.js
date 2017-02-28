import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { CampaignFormModule } from './campaign-form/campaign-form.module';


import { CreateCampaignComponent } from './create-campaign.component';

export const CreateCampaignModule = angular
  .module('monarch.campaign.create', [
    uiRouter,
    CampaignFormModule
  ])
  .component('createCampaign', CreateCampaignComponent)
  .config(($stateProvider)=>{
    'ngInject';
    $stateProvider
      .state('campaigns.create', {
        title: 'Create Campaign',
        url: '/create',
        component: 'createCampaign',
        redirectTo: 'campaigns.create.form',
        params: {
          channel: 'Facebook'
        }
      })
      .state('campaigns.create.form', {
        title: 'Create Campaign',
        template: `
          <campaign-form campaign="$ctrl.campaign"></campaign-form>
        `
      });
  })
  .name;