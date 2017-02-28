export const SelectSearchComponent = {
  bindings: {
    list: '<',
    selectedEntity: '=',
    selectText: '@',
    searchText: '@'
  },
  template: `
    <ul
      class="dropdown menu select-search">
      <li
        class="is-dropdown-submenu-parent opens-right"
        ng-class="{'is-active':$ctrl.dropdownOpen}">
        <a
          href=""
          class="button"
          ng-click="$ctrl.toggleDropdown()">
          {{($ctrl.selectedEntity) ? $ctrl.selectedEntity.title : $ctrl.selectText }}
        </a>
        <ul
          class="menu is-dropdown-submenu submenu vertical first-sub"
          ng-class="{'js-dropdown-active':$ctrl.dropdownOpen}">
          <li class="menu-search" ng-if="$ctrl.selectList.length > 5"><input
              type="search"
              placeholder="{{$ctrl.searchText}}"
              ng-model="$ctrl.searchFilter" />
          </li>
          <li class="menu-search-results">
            <ul class="menu vertical">
              <li ng-repeat="entity in $ctrl.selectList | filter:$ctrl.searchFilter track by entity.index">
                <a
                  href=""
                  ng-click="$ctrl.select(entity)">
                  <div>{{entity.title}}</div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  `,
  controller: class SelectAudienceComponent {
    constructor() {
      'ngInject';
     
    }
    $onInit() {
      this.dropdownOpen = false;
      this.selectList = this.list.map((entity, index)=>Object.assign(
        {},
        {
          index: index,
          title: entity.title
        }
      ));
    }
    select(entity) {
      this.selectedEntity = this.list[entity.index];
      this.toggleDropdown();
    }
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    }
    
  }
};