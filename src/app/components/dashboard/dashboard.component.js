import template from './dashboard.html';

export const DashboardComponent = {
  template,
  controller: class DashboardComponent {
    constructor() {
      'ngInject';
      this.currentDate = new Date();
    }
  }
};