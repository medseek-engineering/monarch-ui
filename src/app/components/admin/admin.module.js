import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AdminComponent } from './admin.component';
import { TierComponent } from './tier.component'

import { tiersMenu } from './tiersMenu.constant';
import { tiers } from './tiers.constant';


export const AdminModule = angular
  .module('monarch.admin', [
    uiRouter
  ])
  .constant('tiersMenu', tiersMenu)
  .constant('tiers', tiers)
  .component('tier', TierComponent)
  .component('admin', AdminComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('admin', {
        title: 'Admin',
        url: '/admin',
        component: 'admin'
      });
  })
  .name;