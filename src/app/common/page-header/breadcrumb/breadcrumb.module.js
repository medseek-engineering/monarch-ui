import angular from 'angular';
import { BreadcrumbComponent } from './breadcrumb.component';


export const BreadcrumbModule = angular
  .module('monarch.common.pageHeader.breadcrumb', [

  ])
  .component('breadcrumb', BreadcrumbComponent)
  .name;