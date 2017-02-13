import angular from 'angular';
import { TileComponent } from './tile.component';


export const TileModule = angular
  .module('monarch.common.tile', [

  ])
  .component('monarchTile', TileComponent)
  .name;