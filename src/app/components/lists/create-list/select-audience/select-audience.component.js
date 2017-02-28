export const SelectAudienceComponent = {
  bindings: {
    selectedAudience: '='
  },
  template: `
    <select-search
      list="$ctrl.audiences"
      selected-entity="$ctrl.selectedAudience"
      select-text="Select Audience"
      search-text="Search Audiences">
    </select-search>
  `,
  controller: class SelectAudienceComponent {
    constructor(audiences) {
      'ngInject';
      this.audiences = audiences;
    }
  }
};