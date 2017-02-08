import angular from 'angular';
import { FooterComponent } from './footer.component';


export const FooterModule = angular
  .module('monarch.common.footer', [

  ])
  .component('monarchFooter', FooterComponent)
  .name;