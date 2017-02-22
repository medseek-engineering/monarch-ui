import angular from 'angular';
import { ManageListsComponent } from './manage-lists.component';

import { lists } from './lists.constant';

export const ManageListsModule = angular
  .module('monarch.lists.manageLists', [
  ])
  .constant('lists', lists)
  .component('manageLists', ManageListsComponent)
  .name;