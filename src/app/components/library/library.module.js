import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { LibraryComponent } from './library.component';


export const LibraryModule = angular
  .module('monarch.library', [
    uiRouter
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