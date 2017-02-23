import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { ManageListsModule } from './manage-lists/manage-lists.module';
import { CreateListModule } from './create-list/create-list.module';
import { ListDetailModule } from './list-detail/list-detail.module';


import { ListsComponent } from './lists.component';

import { createListModes } from './create-list-modes.constant';

export const ListsModule = angular
  .module('monarch.lists', [
    uiRouter,
    ManageListsModule,
    CreateListModule,
    ListDetailModule
  ])
  .constant('createListModes', createListModes)
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
        url: '/',
        component: 'manageLists'
      })
      .state('lists.listDetail', {
        title: 'List',
        url: '/:listId',
        component: 'listDetail',
        breadcrumb: [
          'lists'
        ]
      })
      .state('lists.createList', {
        title: 'Create List',
        url: '/create-list',
        params: {
          mode: 'audience',
          audienceId: null
        },
        redirectTo: 'lists.createList.form',
        component: 'createList'
      });
  })
  .name;