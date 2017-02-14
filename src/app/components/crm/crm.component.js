export const CRMComponent = {
  controller: class CRMComponent {
    constructor($state) {
      'ngInject';
      $state.go('crm.leads');
    }
  },
  template: `
    <crm-header></crm-header>
    <div ui-view></div>
  `
};