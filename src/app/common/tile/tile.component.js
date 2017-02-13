export const TileComponent = {
  transclude: true,
  bindings: {
    tile: '<'
  },
  template: `
    <div class="tile-header">
      <h3 class="tile-title">
        <span ng-if="!$ctrl.tile.stateName">{{$ctrl.tile.title}}</span>
        <a ng-if="$ctrl.tile.stateName" ui-sref="{{$ctrl.tile.stateName}}">{{$ctrl.tile.title}}</a>
        <small ng-if="$ctrl.tile.titleCaption">{{$ctrl.tile.titleCaption}}</small>
      </h3>
    </div>
    <div class="tile-body" data-ng-transclude></div>
  `
};