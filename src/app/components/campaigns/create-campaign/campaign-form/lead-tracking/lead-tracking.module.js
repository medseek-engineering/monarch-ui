import angular from 'angular';

import { LeadTrackingComponent } from './lead-tracking.component';


export const LeadTrackingModule = angular
  .module('monarch.campaign.create.form.leadTracking', [
  ])
  .component('campaignLeadTracking', LeadTrackingComponent)
  .name;