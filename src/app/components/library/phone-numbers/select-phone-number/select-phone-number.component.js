export const SelectPhoneNumberComponent = {
  bindings: {
    selectedPhoneNumber: '='
  },
  template: `
    <select-search
      list="$ctrl.phoneNumbers"
      selected-entity="$ctrl.selectedPhoneNumber"
      select-text="Select Phone Number"
      search-text="Search Phone Numbers">
    </select-search>
  `,
  controller: class SelectPhoneNumberComponent {
    constructor(phoneNumbers) {
      'ngInject';
      this.phoneNumbers = phoneNumbers;
    }
  }
};