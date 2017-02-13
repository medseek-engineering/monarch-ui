import angular from 'angular';
import { SymbolDefsComponent } from './symbol-defs.component';


export const SymbolDefsModule = angular
  .module('monarch.common.footer.symbolDefs', [

  ])
  .component('monarchSymbolDefs', SymbolDefsComponent)
  .name;