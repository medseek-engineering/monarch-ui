import angular from 'angular';
import { PageComponent } from './page.component';


export const PageModule = angular
  .module('monarch.common.page', [

  ])
  .component('monarchPage', PageComponent)
  .name;