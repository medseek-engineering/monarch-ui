export const CampaignObjectiveComponent = {
  bindings: {
    campaign: '='
  },
  template: `
    <section>
      <header class="row">
        <div class="columns small-12">
          <hr />
          <h3>Objective</h3>
        </div>
      </header>
      <div>
        <select-campaign-objective
          campaign="$ctrl.campaign"></select-campaign-objective>
        <campaign-lead-tracking
          ng-if="$ctrl.campaign.objective === 'Leads'"
          campaign="$ctrl.campaign"></campaign-lead-tracking>
      </div>
    </section>
    
  `,
  controller: class CampaignObjectiveComponent {
    constructor() {
      'ngInject';
    }
    $onInit() {
      
    }
  }
};