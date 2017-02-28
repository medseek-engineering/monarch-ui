export const FacebookCampaignComponent = {
  bindings: {
    campaign: '='
  },
  template: `
    
    <campaign-budget
      campaign="$ctrl.campaign"></campaign-budget>
    <campaign-audience
      campaign="$ctrl.campaign"></campaign-audience>
    <campaign-content
      campaign="$ctrl.campaign"></campaign-content>
    <campaign-objective
      campaign="$ctrl.campaign"></campaign-objective>
    
  `,
  controller: class FacebookCampaignComponent {
    constructor(campaignObjectives) {
      'ngInject';
      this.campaignObjectives = campaignObjectives;
    }
    $onInit() {
      this.campaign = Object.assign(
        {},
        this.campaign,
        {
          objective: this.campaignObjectives[0],
          audienceSource: 'list'
        }
      );

      console.log(this.campaign.objective);
    }
  }
};