export const ContentAppsComponent = {
  template: `
      <div class="tile-grid">
        <monarch-tile
          ng-repeat="tile in $ctrl.tiles track by tile.stateName"
          tile="tile">
          <ul class="menu vertical menu-2-across">
            <li ng-repeat="menuItem in tile.menu track by menuItem.stateName">
              <a ui-sref="{{menuItem.stateName}}">{{menuItem.title}}</a>
            </li>
          </ul>
        </monarch-tile>
      </div>

  `,
  controller: class ContentAppsComponent {
    constructor(contentAppTiles) {
      'ngInject';
      this.tiles = contentAppTiles;
    }
  }
};