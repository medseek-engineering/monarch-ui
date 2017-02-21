import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AudienceListModule } from './audience-list/audience-list.module';

import { AudienceDetailModule } from './audience-detail/audience-detail.module';
import { AudienceComponent } from './audience.component';

export const AudienceModule = angular
  .module('monarch.audience', [
    uiRouter,
    AudienceListModule,
    AudienceDetailModule
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
      })
      .state('audience.detail', {
        title: 'Audience',
        url: '/:audienceId',
        component: 'audienceDetail'
      });
  })
  .name;