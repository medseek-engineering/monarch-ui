export const CreateCampaignComponent = {
  template: `
    <div ui-view></div>
  `,
  controller: class CreateCampaignComponent {
    constructor(campaigns, campaignTypes, $stateParams) {
      'ngInject';
      this.campaigns = campaigns;
      this.campaignTypes = campaignTypes.reduce(function(acc, val){
        return acc.concat(val.types);
      },[]);
      this.$stateParams = $stateParams;
    }
    $onInit() {
      this.campaign = {
        title: 'Campaign #'.concat(this.campaigns.length),
        campaignId: this.campaigns[0].campaignId + 1,
        channel: this.campaignTypes.find((channel) => channel.title === this.$stateParams.channel)
      };
    }
  }
};