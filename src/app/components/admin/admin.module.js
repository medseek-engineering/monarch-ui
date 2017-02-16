import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AdminLandingModule } from './landing/admin-landing.module';
import { UserManagementModule } from './user-management/user-management.module';
import { AdminComponent } from './admin.component';
import { TierComponent } from './tier.component';

import { tiersMenu } from './tiersMenu.constant';
import { tiers } from './tiers.constant';


export const AdminModule = angular
  .module('monarch.admin', [
    uiRouter,
    AdminLandingModule,
    UserManagementModule
  ])
  .constant('tiersMenu', tiersMenu)
  .constant('tiers', tiers)
  .component('admin', AdminComponent)
  .component('tier', TierComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('admin', {
        title: 'Admin',
        url: '/admin',
        component: 'admin',
        redirectTo: 'admin.landing'
      })
      .state('admin.landing', {
        title: 'Admin',
        url: '/',
        component: 'adminLanding'
      })
      .state('admin.userManagement', {
        title: 'User Management',
        url: '/user-management?userId',
        component: 'userManagement'
      });
  })
  .name;