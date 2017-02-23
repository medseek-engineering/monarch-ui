import angular from 'angular';

import { CreateListFormComponent } from './create-list-form.component';


export const CreateListFormModule = angular
  .module('monarch.lists.createList.form', [
  ])
  .component('createListForm', CreateListFormComponent)
  .name;