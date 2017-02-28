export const SelectLandingPageComponent = {
  bindings: {
    selectedLandingPage: '='
  },
  template: `
    <select-search
      list="$ctrl.landingPages"
      selected-entity="$ctrl.selectedLandingPage"
      select-text="Select Landing Page"
      search-text="Search Landing Pages">
    </select-search>
  `,
  controller: class SelectLandingPageComponent {
    constructor(landingPages) {
      'ngInject';
      this.landingPages = landingPages;
    }
  }
};