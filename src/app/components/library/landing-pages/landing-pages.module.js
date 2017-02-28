import angular from 'angular';

import { SelectLandingPageModule } from './select-landing-page/select-landing-page.module';

import { landingPages } from './landing-pages.constant';


export const LandingPagesModule = angular
  .module('monarch.library.landingPages', [
    SelectLandingPageModule
  ])
  .constant('landingPages', landingPages)
  .name;