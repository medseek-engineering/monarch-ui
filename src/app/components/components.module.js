import angular from 'angular';
import { DashboardModule } from './dashboard/dashboard.module';
import { AudienceModule } from './audience/audience.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { CRMModule } from './crm/crm.module';
import { ListsModule } from './lists/lists.module';
import { LibraryModule } from './library/library.module';
import { ReportsModule } from './reports/reports.module';
import { ContentAppsModule } from './content-apps/content-apps.module';
import { AdminModule } from './admin/admin.module';

export const ComponentsModule = angular
  .module('monarch.components', [
    DashboardModule,
    AudienceModule,
    CampaignsModule,
    ListsModule,
    CRMModule,
    LibraryModule,
    ReportsModule,
    ContentAppsModule,
    AdminModule
  ])
  .name;