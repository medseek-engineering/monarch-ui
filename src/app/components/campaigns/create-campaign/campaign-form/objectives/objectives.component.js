export const SelectCampaignObjectiveComponent = {
  bindings: {
    campaign: '='
  },
  template: `
    <div class="row">
      <div class="column large-4">
        <label
          class="middle text-right"
          for="campaign-objective">Objective</label>
      </div>
      <div class="column large-8">
        <select
          id="campaign-objective"
          ng-options="item for item in $ctrl.campaignObjectives"
          ng-model="$ctrl.campaign.objective">
        </select>
      </div>
    </div>
    
  `,
  controller: class SelectCampaignObjectiveComponent {
    constructor(campaignObjectives) {
      'ngInject';
      this.campaignObjectives = campaignObjectives;
    }
  }
};