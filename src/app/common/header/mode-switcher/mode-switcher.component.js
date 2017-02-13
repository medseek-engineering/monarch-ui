export const ModeSwitcherComponent = {
  template: `
    <ul class="dropdown menu dropdown-mode" dropdown-menu>
      <li>
        <a tabindex="0">{{$ctrl.state.current.title}}</a>
        <ul class="menu">
          <li
            ui-sref-active="active"
            ng-repeat="menuItem in $ctrl.modes track by menuItem.name">
            <a ui-sref="{{menuItem.name}}">
              {{menuItem.title}}
            </a>
          </li>
        </ul>
      </li>

    </ul>

  `,
  controller: class ModeSwitcherComponent {
    constructor($state, modesMenu) {
      'ngInject';
      this.state = $state;
      this.modes = modesMenu.map((menuItem) => {
        return $state.get(menuItem);
      });
    }
  }
};