import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularFoundation from 'angular-foundation-6';
import { AppComponent } from './app.component';
import { CommonModule } from './common/common.module';
import { ComponentsModule } from './components/components.module';
import './app.scss';

export const AppModule = angular
  .module('monarch', [
    CommonModule,
    ComponentsModule,
    uiRouter,
    'mm.foundation'
  ])
  .component('monarchApp', AppComponent)
  .name;