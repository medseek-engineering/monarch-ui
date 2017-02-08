const modes = [
  {
    title: 'Dashboard',
    stateName: 'dashboard'
  },
  {
    title: 'Audiences',
    stateName: 'audiences'
  },
  {
    title: 'Lists',
    stateName: 'lists'
  },
  {
    title: 'Campaigns',
    stateName: 'campaigns'
  },
  {
    title: 'Library',
    stateName: 'library'
  },
  {
    title: 'CRM',
    stateName: 'leads'
  },
  {
    title: 'Reports',
    stateName: 'reports'
  },
  {
    title: 'Content Apps',
    stateName: 'contentApps'
  },
  {
    title: 'Admin',
    stateName: 'admin'
  }
];

export const ModeSwitcherComponent = {
  template: `
    <ul class="dropdown menu dropdown-mode" dropdown-menu>
      <li>
        <a tabindex="0">{{$ctrl.state.current.title}}</a>
        <ul class="menu">
          <li
            ui-sref-active="active"
            ng-repeat="menuItem in $ctrl.modes track by menuItem.stateName">
            <a ui-sref="{{menuItem.stateName}}">
              {{menuItem.title}}
            </a>
          </li>
        </ul>
      </li>

    </ul>

  `,
  controller: class ModeSwitcherComponent {
    constructor($state) {
      'ngInject';
      this.modes = modes;
      this.state = $state;
    }
  }
};