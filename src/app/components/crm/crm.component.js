export const CRMComponent = {
  controller: class CRMComponent {
    constructor($state) {
      'ngInject';
    }
  },
  template: `
    <crm-header></crm-header>
    <div ui-view></div>
  `
};