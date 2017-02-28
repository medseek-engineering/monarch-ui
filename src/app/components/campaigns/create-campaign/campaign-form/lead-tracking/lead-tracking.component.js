export const LeadTrackingComponent = {
  bindings: {
    campaign: '='
  },
  template: `
    <div class="row">
      <div class="columns large-4">
        <label
          class="middle text-right"
          for="campaign-landing-page">Landing Page</label>
      </div>
      <div class="columns large-8">
        <select-landing-page
          selected-landing-page="$ctrl.campaign.landingPage">
        </select-landing-page>
        <div class="select-link">
          <a href="">Create New Landing Page&hellip;</a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="columns large-4">
        <label
          class="middle text-right"
          for="campaign-phone-number">Phone Number</label>
      </div>
      <div class="columns large-8">
        <select-phone-number
          selected-phone-number="$ctrl.campaign.phoneNumber">
        </select-phone-number>
        <div class="select-link">
          <a href="">Create New Phone Number&hellip;</a>
        </div>
      </div>
    </div>
  `,
  controller: class LeadTrackingComponent {
    constructor(landingPages, phoneNumbers) {
      'ngInject';
      this.landingPages = landingPages;
      this.phoneNumbers = phoneNumbers;
    }
    $onInit() {
      this.campaign = Object.assign(
        {},
        this.campaign,
        {
          landingPage: this.landingPages[0],
          phoneNumber: this.phoneNumbers[0]
        }
      )
    }
  }
};