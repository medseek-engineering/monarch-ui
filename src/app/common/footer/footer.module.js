import angular from 'angular';
import { SymbolDefsModule } from './symbol-defs/symbol-defs.module';

import { FooterComponent } from './footer.component';


export const FooterModule = angular
  .module('monarch.common.footer', [
    SymbolDefsModule
  ])
  .component('monarchFooter', FooterComponent)
  .name;