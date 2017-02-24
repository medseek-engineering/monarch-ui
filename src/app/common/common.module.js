import angular from 'angular';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { PageModule } from './page/page.module';
import { TileModule } from './tile/tile.module';
import { PageHeaderModule } from './page-header/page-header.module';
import { FilterBarModule } from './filter-bar/filter-bar.module';
import { DateFilterModule } from './date-filter/date-filter.module';


export const CommonModule = angular
  .module('monarch.common', [
    HeaderModule,
    FooterModule,
    SidebarModule,
    PageModule,
    TileModule,
    FilterBarModule,
    PageHeaderModule,
    DateFilterModule
  ])
  .name;