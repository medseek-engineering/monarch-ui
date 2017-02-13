import angular from 'angular';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { PageModule } from './page/page.module';
import { TileModule } from './tile/tile.module';

export const CommonModule = angular
  .module('monarch.common', [
    HeaderModule,
    FooterModule,
    SidebarModule,
    PageModule,
    TileModule
  ])
  .name;