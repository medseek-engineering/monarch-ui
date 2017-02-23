import angular from 'angular';
import { SelectAudienceModule } from './select-audience/select-audience.module';
import { CreateListFormModule } from './create-list-form/create-list-form.module';

import { CreateListComponent } from './create-list.component';


export const CreateListModule = angular
  .module('monarch.lists.createList', [
    CreateListFormModule,
    SelectAudienceModule
  ])
  .component('createList', CreateListComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('lists.createList.form', {
        title: 'Create List',
        url: '/',
        breadcrumb: [
          'lists'
        ],
        template: '<create-list-form list="$ctrl.list"></create-list-form>'
      })
      .state('lists.createList.audience', {
        title: 'Create Audience',
        url: '/create-audience',
        hidePageHeader: true,
        template: `
          <create-audience
            audience="$ctrl.list.audience"
            on-save="$ctrl.onAudienceSave"
            on-cancel="$ctrl.onAudienceCancel">
          </create-audience>
        `
      });
  })
  .name;