export const PageHeaderComponent = {
  bindings: {
    currentState: '<'
  },

  template: `
    <div
      class="row row-flush page-header"
      ng-if="!$ctrl.currentState.hidePageHeader">
      <div
        class="column small-12"
        ng-if="$ctrl.currentState.breadcrumb && $ctrl.currentState.breadcrumb.length">
        <breadcrumb breadcrumb="$ctrl.currentState.breadcrumb"></breadcrumb>
      </div>
      <div
        class="column"
        ng-class="{'medium-6': $ctrl.currentState.menu }">
        <h2>{{$ctrl.currentState.title}}</h2>
      </div>
      <div
        class="column medium-6 clearfix"
        ng-if="$ctrl.currentState.menu && $ctrl.currentState.menu.length">
        <ul class="menu dropdown dropdown-on-right float-right page-actions">
          <li
            ng-class="{'is-active': button.dropdownOpen, 'is-dropdown-submenu-parent opens-right': button.menu && button.menu.length}"
            ng-repeat="button in $ctrl.currentState.menu">
            <a
              ui-sref="{{button.name}}"
              ng-if="!button.menu || !button.menu.length"
              class="button {{button.className}}">{{button.title}}</a>
            <a
              tabindex="0"
              ng-if="button.menu && button.menu.length"
              ng-click="button.dropdownOpen = !button.dropdownOpen"
              class="button {{button.className}}">{{button.title}}</a>
            <ul
              class="menu is-dropdown-submenu submenu vertical first-sub"
              ng-class="{'js-dropdown-active':button.dropdownOpen}"
              ng-if="button.menu && button.menu.length">
              <li ng-repeat="subbutton in button.menu">
                <a ui-sref="{{subbutton.name}}">{{subbutton.title}}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  `
};