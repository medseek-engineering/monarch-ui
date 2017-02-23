import angular from 'angular';
import { ListDetailComponent } from './list-detail.component';


export const ListDetailModule = angular
  .module('monarch.lists.listDetail', [
  ])
  .component('listDetail', ListDetailComponent)
  .name;