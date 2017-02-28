import angular from 'angular';

import { BudgetComponent } from './budget.component';


export const BudgetModule = angular
  .module('monarch.campaign.create.form.budget', [
  ])
  .component('campaignBudget', BudgetComponent)
  .name;