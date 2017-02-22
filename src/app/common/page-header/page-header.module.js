import angular from 'angular';
import { PageHeaderComponent } from './page-header.component';


export const PageHeaderModule = angular
  .module('monarch.common.pageHeader', [

  ])
  .component('pageHeader', PageHeaderComponent)
  .name;