import angular from 'angular';
import { UserManagementComponent } from './user-management.component';

export const UserManagementModule = angular
  .module('monarch.admin.userManagement', [

  ])
  .component('userManagement', UserManagementComponent)
  .name;