import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AudienceComponent } from './audience.component';


export const AudienceModule = angular
  .module('monarch.audience', [
    uiRouter
  ])
  .component('audience', AudienceComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('audience', {
        title: 'Audience',
        url: '/audience',
        component: 'audience'
      });
  })
  .name;