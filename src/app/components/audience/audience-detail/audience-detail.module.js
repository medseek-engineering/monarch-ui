import angular from 'angular';
import { AudienceDetailComponent } from './audience-detail.component';
import { AudienceBuilderModule } from './audience-builder/audience-builder.module';
import { CreateAudienceModule } from './create-audience/create-audience.module';


export const AudienceDetailModule = angular
  .module('monarch.audience.detail', [
    AudienceBuilderModule,
    CreateAudienceModule
  ])
  .component('audienceDetail', AudienceDetailComponent)
  .name;