export const CampaignsListComponent = {
  template: `
    <div
      class="row row-flush page-header">
      <div
        class="column medium-6">
        <h2>Campaigns</h2>
      </div>
      <div
        class="column medium-6 clearfix">
        <ul class="menu dropdown dropdown-on-right float-right page-actions">
          <li
            class="is-dropdown-submenu-parent opens-right"
            ng-class="{'is-active': $ctrl.dropdownOpen}">
            <a
              tabindex="0"
              ng-click="$ctrl.dropdownOpen = !$ctrl.dropdownOpen"
              class="button primary">Create Campaign</a>
            <ul
              class="menu is-dropdown-submenu submenu vertical first-sub wide-dropdown"
              ng-class="{'js-dropdown-active':$ctrl.dropdownOpen}">
              <li>
                <div class="row collapse">
                  <div class="columns medium-6" ng-repeat="cat in $ctrl.campaignTypes track by cat.title">
                    <div><h5 class="menu-heading">{{cat.title}}</h5></div>
                    <ul class="menu vertical">
                      <li ng-repeat="type in cat.types track by type.title">
                        <a href="">{{type.title}}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="wrapper with-sidebar">
      <monarch-sidebar>
        <nav>
          <h4 class="sidebar-heading sidebar-heading-link"><a ui-sref="campaigns.list({channel: 'all'})">Channels</a></h4>
          <ul class="menu vertical">
            <li><a
              ui-sref="campaigns.list({channel: 'all'})">All <span class="badge">{{$ctrl.campaigns.length}}</span></a>
            </li>
            <li
              ng-repeat="channel in $ctrl.campaignTypeFilters track by channel.title"><a
              ui-sref="campaigns.list({channel: channel.title })">{{channel.title}} <span class="badge">{{channel.count}}</span></a></li>            
          </ul>
          
          
        </nav>
      </monarch-sidebar>
      <monarch-page>
        <div style="padding: 1em; background-color: white;">
          <div class="row collapse" style="max-width: 100%;">
            <div class="column large-3">
              <ul class="dropdown menu" style="max-width: 240px" dropdown-menu>
                <li class="filter-bar-input">
                  <input ng-model="$ctrl.searchFilter" type="search" placeholder="Search Campaigns" />
                </li>
                <li>
                  <a href="" class="button">Filter</a>
                  <ul class="menu">
                    <li><a href="">Create Filter</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <div class="column large-2">
              <div class="stat-heading card-stat-heading table-heading">
                List
              </div>
            
            </div>
            <div class="column large-1 text-right show-for-medium">
              <div class="stat-heading card-stat-heading table-heading">
                Leads
              </div>
            </div>
            <div class="column large-1 text-right show-for-medium">
              <div class="stat-heading card-stat-heading table-heading">
                Budget
              </div>
            </div>
            <div class="column large-1 text-right show-for-medium">
              <div class="stat-heading card-stat-heading table-heading">
                CPL
              </div>
            </div>
            <div class="column large-2 text-right show-for-medium">
              <div class="stat-heading card-stat-heading table-heading text-right">
                Total
              </div>
            </div>
            <div class="column large-2 medium-2 clearfix">
              <date-filter></date-filter>
            </div>
          </div>
        </div>

        <div class="card-list card-flush">
          <div
            class="card"
            ng-repeat="campaign in $ctrl.campaigns | filter:$ctrl.searchFilter track by campaign.campaignId">
            <div class="row row-flush collapse">
              <div class="column medium-6 large-3">
                <span class="status status-{{campaign.status | lowercase}}">
                  <svg
                    ng-if="campaign.status === 'Draft'"
                    class="icon icon-draft"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-draft"></use></svg>
                  <svg
                    ng-if="campaign.status === 'Paused'"
                    class="icon icon-pause"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-pause"></use></svg>
                </span>
                <div class="block">
                  <div class="card-title"><a ui-sref="lists.listDetail({listId: campaign.listId})">{{campaign.title}}</a></div>
                  <div>{{ campaign.channel }}</div>
                </div>
              </div>
              <div class="column large-2">
                {{ campaign.listTitle }}
              </div>
              <div class="column small-4 medium-1 large-1 text-right">
                <div class="stat card-stat">{{ campaign.leads }}</div>
              </div>
              <div class="column small-4 medium-1 large-1 text-right">
                <div class="stat card-stat">{{ '$' + (campaign.budget | number: 2)}}</div>
              </div>
              <div class="column small-4 medium-1 large-1 text-right">
                <div class="stat card-stat"><span ng-if="campaign.leads > 0">{{ '$' + (campaign.costPerLead | number: 3)}}</span>
                <span ng-if="!(campaign.leads > 0)">&mdash;</span></div>
              </div>
              <div class="column small-4 medium-1 large-2 text-right">
                <div class="stat card-stat">{{ '$' + (campaign.total | number:2)}}</div>
              </div>
              <div class="column medium-2 large-2 clearfif">
                
                <ul class="dropdown menu float-right dropdown-on-right" dropdown-menu>
                  <li>
                    <a
                      href=""
                      tabindex="0"
                      class="button">Actions</a>
                    <ul class="menu">
                      <li><a href="#">Edit</a></li>
                      <li><a href="#">Duplicate</a></li>
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
  controller: class CampaignsListComponent {
    constructor(campaigns, campaignTypes, $filter) {
      'ngInject';
      this.campaigns = campaigns;
      this.campaignTypes = campaignTypes;
      this.campaignTypeFilters = campaignTypes.reduce(function(acc, val){
        return acc.concat(val.types);
      },[]).map(channel => Object.assign({}, channel, {
        count: this.campaigns.filter((camp)=>camp.channel === channel.title ).length
      }));
    }
  }
};