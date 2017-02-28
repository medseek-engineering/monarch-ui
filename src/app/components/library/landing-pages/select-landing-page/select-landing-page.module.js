import angular from 'angular';

import { SelectLandingPageComponent } from './select-landing-page.component';

export const SelectLandingPageModule = angular
  .module('monarch.library.landingPages.select', [
  ])
  .component('selectLandingPage', SelectLandingPageComponent)
  .name;