//import template from './dashboard.html';

export const DashboardComponent = {
  template: '<h1>Dashboard</h1>',
  controller: class DashboardComponent {
    constructor() {
      'ngInject';
      this.currentDate = new Date();
    }
  }
};