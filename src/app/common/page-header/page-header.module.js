import angular from 'angular';

import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';

import { PageHeaderComponent } from './page-header.component';

export const PageHeaderModule = angular
  .module('monarch.common.pageHeader', [
    BreadcrumbModule
  ])
  .component('pageHeader', PageHeaderComponent)
  .name;