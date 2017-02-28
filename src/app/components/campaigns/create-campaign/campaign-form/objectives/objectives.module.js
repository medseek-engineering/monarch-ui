import angular from 'angular';
import { SelectCampaignObjectiveComponent } from './objectives.component';
import {campaignObjectives} from './campaign-objectives.constant';
import {CampaignObjectiveComponent} from './campaign-objective.component';


export const ObjectivesModule = angular
  .module('monarch.campaign.create.form.objectives', [
  ])
  .constant('campaignObjectives', campaignObjectives)
  .component('campaignObjective', CampaignObjectiveComponent)
  .component('selectCampaignObjective', SelectCampaignObjectiveComponent)
  .name;