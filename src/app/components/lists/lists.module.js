import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { ManageListsModule } from './manage-lists/manage-lists.module';

import { ListsComponent } from './lists.component';

export const ListsModule = angular
  .module('monarch.lists', [
    uiRouter,
    ManageListsModule
  ])
  .component('lists', ListsComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('lists', {
        title: 'Lists',
        url: '/lists',
        component: 'lists',
        redirectTo: 'lists.manageLists'
      })
      .state('lists.manageLists', {
        title: 'Lists',
        url: '/?listId',
        component: 'manageLists'
      });
  })
  .name;