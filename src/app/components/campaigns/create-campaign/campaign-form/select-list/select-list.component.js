export const SelectListComponent = {
  bindings: {
    selectedList: '='
  },
  template: `
    <select-search
      list="$ctrl.lists"
      selected-entity="$ctrl.selectedList"
      select-text="Select List"
      search-text="Search Lists">
    </select-search>
  `,
  controller: class SelectListComponent {
    constructor(lists) {
      'ngInject';
      this.lists = lists;
    }
    
  }
};