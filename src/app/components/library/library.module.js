import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { PhoneNumbersModule } from './phone-numbers/phone-numbers.module';
import { FormsModule } from './forms/forms.module';
import { LandingPagesModule } from './landing-pages/landing-pages.module';


import { LibraryComponent } from './library.component';


export const LibraryModule = angular
  .module('monarch.library', [
    uiRouter,
    PhoneNumbersModule,
    FormsModule,
    LandingPagesModule
  ])
  .component('library', LibraryComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('library', {
        title: 'Library',
        url: '/library',
        component: 'library'
      });
  })
  .name;