import angular from 'angular';
import { CreateListComponent } from './create-list.component';


export const CreateListModule = angular
  .module('monarch.lists.createList', [
  ])
  .component('createList', CreateListComponent)
  .name;