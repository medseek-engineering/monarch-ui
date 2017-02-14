export const AdminComponent = {
  template: `
    <div ui-view></div>
  `,
  controller: class AdminComponent {
    constructor($state) {
      'ngInject';
    }
  }
};