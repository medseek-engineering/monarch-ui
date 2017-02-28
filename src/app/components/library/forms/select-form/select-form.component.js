export const SelectFormComponent = {
  bindings: {
    selectedForm: '='
  },
  template: `
    <select-search
      list="$ctrl.forms"
      selected-entity="$ctrl.selectedForm"
      select-text="Select Form"
      search-text="Search Forms">
    </select-search>
  `,
  controller: class SelectFormComponent {
    constructor(forms) {
      'ngInject';
      this.forms = forms;
    }
  }
};