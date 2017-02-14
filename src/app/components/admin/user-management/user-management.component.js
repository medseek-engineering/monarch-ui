
const displayFields = [
  {
    field: 'email',
    name: 'Email'
  }
];

export const UserManagementComponent = {
  template: `
    <div
      class="admin-wrapper wrapper with-sidebar with-side-panel"
      ng-class="{'side-panel-open': $ctrl.stateParams.userId}">
      <monarch-sidebar class="admin-sidebar">
        <tier
          tier="$ctrl.tiersMenu[0]"
          entities="$ctrl.tiers.entities"
          selected-entity="$ctrl.selectedTier">
        </tier>
      </monarch-sidebar>
      <monarch-page>
        <div class="row row-flush page-header">
          <div class="column">
            <a ui-sref="admin.landing">Admin</a>
            <h2>User Management</h2>
          </div>
        </div>
        <div class="filter-bar">
          <div class="filter-bar-left">
            <ul class="dropdown menu" dropdown-menu>
              <li class="filter-bar-input">
                <input type="search" placeholder="Search Users" />
              </li>
              <li>
                <a href="" class="button">Filter</a>
                <ul class="menu">
                  <li><a href="">Create Filter</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="filter-bar-right">
            <ul class="menu">
              <li>
                <a ui-sref="admin.userManagement({userId: 'ADD'})" class="button primary">Add User</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-list card-flush">
          <a 
            ng-repeat="user in $ctrl.selectedTier.users"
            ng-class="{'card-disabled':!user.active}"
            class="card"
            ui-sref-active="active"
            ui-sref="admin.userManagement({userId: user.userId })">
            <div class="row row-flush collapse">
              <div class="columns large-4">
                <span class="card-title">{{user.firstName}} {{user.lastName}}</span><br>
              </div>
              <div class="columns large-4">
                {{user.email}}
              </div>
              <div class="columns large-4 text-right">
                <small>Jan 15, 2017</small>
              </div>
            </div>
          </a>
        </div>
      </monarch-page>
      <monarch-side-panel class="side-panel" ng-if="$ctrl.stateParams.userId">
        <button class="close-button" aria-label="Close menu" type="button" ui-sref="admin.userManagement({userId: null})">
          <span aria-hidden="true">&times;</span>
        </button>
        <div ng-if="$ctrl.stateParams.userId !== 'ADD'">
          <h6>{{$ctrl.selected.id}}</h6>
          <h2>{{$ctrl.selected.firstName}} {{$ctrl.selected.lastName}}</h2>
          <small>{{$ctrl.selected.lastUpdated}}</small>
          <dl class="large-list">
            <dt ng-repeat-start="field in $ctrl.displayFields track by field.field">{{field.name}}</dt>
            <dd ng-repeat-end>{{$ctrl.selected[field.field]}}</dd>
          </dl>
        </div>
        <div ng-if="$ctrl.stateParams.userId === 'ADD'">
          <h2>Add User</h2>
          <label>
            First Name
            <input type="text">
          </label>
          <label>
            Last Name
            <input type="text">
          </label>
          <label ng-repeat="field in $ctrl.displayFields track by field.field">
            {{field.name}}
            <input type="text">
          </label>
        </div>
      </monarch-side-panel>
    </div>
  `,
  controller: class UserManagementComponent {
    constructor(tiersMenu, tiers, $stateParams, $scope) {
      'ngInject';
      this.selectedTier = tiers.entities[0];
      this.tiersMenu = tiersMenu;
      this.tiers = tiers;
      this.stateParams = $stateParams;

      this.displayFields = displayFields;

      $scope.$watch(()=>$stateParams.userId, (newVal)=>{
        if(!newVal ||
           !this.selectedTier ||
           !this.selectedTier.users) {
          return;
        }
        
        this.selected = this.selectedTier.users.find((element)=>{
          return element.userId === parseInt(newVal[0]);
        });

      });
    }
  }
};