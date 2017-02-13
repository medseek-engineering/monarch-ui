import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { ContentAppsComponent } from './content-apps.component';
import { contentAppTiles } from './content-apps-tiles.constant.js';

export const ContentAppsModule = angular
  .module('monarch.contentApps', [
    uiRouter
  ])
  .component('contentApps', ContentAppsComponent)
  .constant('contentAppTiles', contentAppTiles)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('contentApps', {
        title: 'Content Apps',
        url: '/content-apps',
        component: 'contentApps'
      });
  })
  .name;