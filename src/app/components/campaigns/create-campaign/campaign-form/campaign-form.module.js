import angular from 'angular';
import { SelectListModule } from './select-list/select-list.module';
import { FacebookCampaignModule } from './facebook-campaign/facebook-campaign.module';

import { LeadTrackingModule } from './lead-tracking/lead-tracking.module';
import { BudgetModule } from './budget/budget.module';
import { AudienceModule } from './audience/audience.module';
import { ContentModule } from './content/content.module';
import { ObjectivesModule } from './objectives/objectives.module';


import { CampaignFormComponent } from './campaign-form.component';



export const CampaignFormModule = angular
  .module('monarch.campaign.create.form', [
    SelectListModule,
    FacebookCampaignModule,
    LeadTrackingModule,
    BudgetModule,
    AudienceModule,
    ContentModule,
    ObjectivesModule
  ])
  .component('campaignForm', CampaignFormComponent)
  .name;