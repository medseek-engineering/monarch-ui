export const ModeSwitcherComponent = {
  template: `
    <ul
      class="dropdown menu dropdown-mode">
      <li
        class="is-dropdown-submenu-parent opens-right"
        ng-class="{'is-active':$ctrl.dropdownOpen}">
        <a
          tabindex="0"
          ng-click="$ctrl.toggleDropdown()">
          {{$ctrl.currentMode.title}}
        </a>
        <ul
          class="menu is-dropdown-submenu submenu vertical first-sub"
          ng-class="{'js-dropdown-active':$ctrl.dropdownOpen}">
          <li
            ng-repeat="menuItem in $ctrl.modes track by menuItem.name">
            <a
              tabindex="0"
              ng-click="$ctrl.goToMode(menuItem)">
              {{menuItem.title}}
            </a>
          </li>
        </ul>
      </li>
    </ul>

  `,
  controller: class ModeSwitcherComponent {
    constructor($state, modesMenu, $transitions) {
      'ngInject';

      this.$transitions = $transitions;
      this.modesMenu = modesMenu;
      this.$state = $state;

    }
    $onInit() {
      this.dropdownOpen = false;
      this.modes = this.modesMenu.map(menuItem => {
        return this.$state.get(menuItem);
      });

      this.currentMode = this.$state.get(this.modesMenu[0]);

      this.$transitions.onSuccess({ }, () => {
        this.currentMode = this.getCurrentMode();
      });
    }
    goToMode(newState) {
      this.$state.go(newState.name);
      this.toggleDropdown();
    }
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    }
    getCurrentMode() {
      let states = Object.keys(this.$state.$current.includes);
      return this.$state.get(states[1]);
    }
  }
};