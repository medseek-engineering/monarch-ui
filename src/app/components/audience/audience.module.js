import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AudienceListModule } from './audience-list/audience-list.module';
import { AudienceComponent } from './audience.component';

export const AudienceModule = angular
  .module('monarch.audience', [
    uiRouter,
    AudienceListModule
  ])
  .component('audience', AudienceComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('audience', {
        title: 'Audience',
        url: '/audience',
        component: 'audience',
        redirectTo: 'audience.list'
      })
      .state('audience.list', {
        title: 'Audience',
        url: '/',
        component: 'audienceList'
      });
  })
  .name;