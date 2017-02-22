export const ManageListsComponent = {
  template: `
    <div class="row row-flush page-header">
      <div class="column">
        <h2>Lists</h2>
      </div>
    </div>
    <div
      class="wrapper">
      <monarch-page>
        <div style="padding: 1em; background-color: white;">
          <div class="row collapse" style="max-width: 100%;">
            <div class="column large-3">
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
            <div class="column large-2 text-right show-for-large">
              <div class="stat-heading card-stat-heading table-heading">
                Conversion Rate
              </div>
            
            </div>
            <div class="column large-2 text-right show-for-large">
              <div class="stat-heading card-stat-heading table-heading">
                Households
              </div>
            </div>
            <div class="column large-2 clearfix">
              <ul class="dropdown menu float-right dropdown-on-right" dropdown-menu>
                <li>
                  <a ui-sref="lists.manageLists({listId: 'ADD'})" class="button primary">Create List</a>
                  <ul class="menu">
                    <li><a href="">From New Audience</a></li>
                    <li><a href="">From Existing Audience</a></li>
                    <li><a href="">From Leads</a></li>
                    <li><a href="">Import List</a></li>
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
              <div class="column medium-4 large-3">
                <div class="card-title"><a ui-sref="lists.manageLists({listId: list.listId})">{{list.title}}</a></div>
                Created {{list.created}} by {{list.createdBy}}
                
              </div>
              <div class="column medium-4 large-3">
                <div ng-repeat="source in list.sources">{{source.type}}: {{source.title}}</div>
              </div>
              <div class="column large-2 text-right">
                <div class="stat card-stat">
                  {{list.conversionRate | number}}%
                </div>
                <div class="stat-heading card-stat-heading hide-for-large">
                  Conversion Rate
                </div>
              </div>
              <div class="column large-2 text-right">
                <div class="stat card-stat">
                  {{list.count | number}}
                </div>
                <div class="stat-heading card-stat-heading hide-for-large">
                  Households
                </div>
              </div>
              
              <div class="column medium-4 large-2 clearfif">
                
                <ul class="dropdown menu float-right dropdown-on-right" dropdown-menu>
                  <li>
                    <a
                      href=""
                      tabindex="0"
                      class="button">More</a>
                    <ul class="menu">
                      <li><a href="#">Settings</a></li>
                      <li><a href="#">Import</a></li>
                      <li><a href="#">Duplicate List</a></li>
                      <li><a href="#">Combine List</a></li>
                      <li><a href="#">Export List</a></li>
                    </ul>
                  </li>
                </ul>
      





              </div>
            </div>

          <!-- end card -->
          </div>

        </div>
        
      </monarch-page>
      <monarch-side-panel
        class="side-panel"
        ng-if="$ctrl.stateParams.listId">
        <button
          class="close-button"
          aria-label="Close menu"
          type="button"
          ui-sref="lists.manageLists({listId: null})">
          <span aria-hidden="true">&times;</span>
        </button>

      </monarch-side-panel>
    </div>
  `,
  controller: class ManageListsComponent {
    constructor(lists, $stateParams) {
      'ngInject';
      this.lists = lists;
      this.stateParams = $stateParams;
    }
  }
};