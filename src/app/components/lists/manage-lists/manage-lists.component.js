export const ManageListsComponent = {
  template: `
    <div
      class="wrapper">
      <monarch-page>
        <div style="padding: 1em; background-color: white;">
          <div class="row collapse" style="max-width: 100%;">
            <div class="column medium-5 large-3">
              <ul class="dropdown menu" dropdown-menu>
                <li class="filter-bar-input">
                  <input ng-model="$ctrl.searchFilter" type="search" placeholder="Search Lists" />
                </li>
                <li>
                  <a href="" class="button">Filter</a>
                  <ul class="menu">
                    <li><a href="">Create Filter</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="column large-3 show-for-large">
              <div class="stat-heading card-stat-heading table-heading">
                Sources
              </div>
            </div>
            <div class="column medium-3 large-2 text-right show-for-medium">
              <div class="stat-heading card-stat-heading table-heading">
                Conversion Rate
              </div>
            
            </div>
            <div class="column medium-2 large-2 text-right show-for-medium">
              <div class="stat-heading card-stat-heading table-heading">
                Households
              </div>
            </div>
            <div class="column large-2 medium-2 clearfix">
              <ul class="dropdown menu float-right dropdown-on-right" dropdown-menu>
                <li>
                  <a tabindex="0" class="button primary">Create List</a>
                  <ul class="menu">
                    <li ng-repeat="mode in $ctrl.createListModes track by mode.name"><a ui-sref="{{mode.name}}">{{mode.title}}</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-list">
          <div
            class="card"
            ng-repeat="list in $ctrl.lists | filter:$ctrl.searchFilter">
            <div class="row row-flush collapse">
              <div class="column medium-5 large-3">
                <div class="card-title"><a ui-sref="lists.listDetail({listId: list.listId})">{{list.title}}</a></div>
                Created {{list.created}} by {{list.createdBy}}
                <div ng-repeat="source in list.sources" class="hide-for-large">{{source.type}}: {{source.title}}</div>
              </div>
              <div class="column large-3 show-for-large">
                <div ng-repeat="source in list.sources">{{source.type}}: {{source.title}}</div>
              </div>
              <div class="column small-6 medium-3 large-2 text-right">
                <div class="stat card-stat">
                  {{list.conversionRate | number}}%
                </div>
                <div class="stat-heading card-stat-heading hide-for-medium">
                  Conversion Rate
                </div>
              </div>
              <div class="column small-6 medium-2 large-2 text-right">
                <div class="stat card-stat">
                  {{list.count | number}}
                </div>
                <div class="stat-heading card-stat-heading hide-for-medium">
                  Households
                </div>
              </div>
              
              <div class="column medium-2 large-2 clearfif">
                
                <ul class="dropdown menu float-right dropdown-on-right" dropdown-menu>
                  <li>
                    <a
                      href=""
                      tabindex="0"
                      class="button">Actions</a>
                    <ul class="menu">
                      <li><a href="#">View List</a></li>
                      <li><a href="#">Create Campaign</a></li>
                      <li><a href="#">Settings</a></li>
                      <li><a href="#">Import</a></li>
                      <li><a href="#">Duplicate</a></li>
                      <li><a href="#">Combine List</a></li>
                      <li><a href="#">Export</a></li>
                    </ul>
                  </li>
                </ul>

              </div>
            </div>

          <!-- end card -->
          </div>

        </div>
        
      </monarch-page>
    </div>
  `,
  controller: class ManageListsComponent {
    constructor(lists, $stateParams, createListModes) {
      'ngInject';
      this.lists = lists;
      this.stateParams = $stateParams;
      this.createListModes = createListModes;
    }
  }
};