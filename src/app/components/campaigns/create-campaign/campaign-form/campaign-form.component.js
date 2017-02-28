export const CampaignFormComponent = {
  bindings: {
    campaign: '<'
  },
  template: `
    <div class="wrapper">
      <monarch-page class="page-full">
        <form
          ng-submit="$ctrl.submit($ctrl.campaign)"
          class="form-wrapper">
          <div class="row">
            <div class="column large-4">
              <label
                class="middle text-right"
                for="campaign-name">Campaign Name</label>
            </div>
            <div class="column large-8">
              <input
                id="campaign-name"
                type="text"
                ng-model="$ctrl.campaign.title">
            </div>
          </div>
          <div class="row">
            <div class="column large-4">
              <label
                class="middle text-right"
                for="campaign-channel">Channel</label>
            </div>
            <div class="column large-8">
              <select
                id="campaign-channel"
                ng-options="item as item.title for item in $ctrl.campaignTypes track by item.title"
                ng-model="$ctrl.campaign.channel">
              </select>
            </div>
          </div>

          <div ng-switch="$ctrl.campaign.channel.title">
            <div ng-switch-when="Facebook">
              <facebook-campaign campaign="$ctrl.campaign"></facebook-campaign>
            </div>
          </div>


          <div class="row">
            <div class="columns large-8 large-offset-4">
              <button
                class="button primary"
                type="submit">Save</button>
              <button
                class="button"
                ui-sref="campaigns">Cancel</button>
            </div>
          </div>
          
        </form>
      
      </monarch-page>
    </div>
  `,
  controller: class CampaignFormComponent {
    constructor(campaignTypes) {
      'ngInject';
      this.campaignTypes = campaignTypes.reduce(function(acc, val){
        return acc.concat(val.types);
      },[]);
    }
    $onInit() {
    }
  }
};