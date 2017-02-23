export const SelectAudienceComponent = {
  bindings: {
    selectedAudience: '='
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
          {{($ctrl.selectedAudience) ? $ctrl.selectedAudience.title : 'Select Audience'}}
        </a>
        <ul
          class="menu is-dropdown-submenu submenu vertical first-sub"
          ng-class="{'js-dropdown-active':$ctrl.dropdownOpen}">
          <li class="menu-search"><input
              type="search"
              placeholder="Search Audiences"
              ng-model="$ctrl.searchFilter" />
          </li>
          <li class="menu-search-results">
            <ul class="menu vertical">
              <li ng-repeat="audience in $ctrl.audienceList | filter:$ctrl.searchFilter">
                <a
                  href=""
                  ng-click="$ctrl.select(audience)">
                  <div>{{audience.title}}</div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  `,
  controller: class SelectAudienceComponent {
    constructor(audiences) {
      'ngInject';
      this.audiences = audiences;
      this.dropdownOpen = false;
    }
    $onInit() {
      this.audienceList = this.audiences.map((audience)=>Object.assign(
        {},
        audience,
        {
          persons: []
        }
      ));
    }
    select(audience) {
      // add persons back and assign to selectedAudience
      this.selectedAudience = this.audiences.find(aud => audience.audienceId === aud.audienceId);
      this.toggleDropdown();
    }
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    }
    
  }
};