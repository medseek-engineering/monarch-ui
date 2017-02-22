export const AudienceDetailComponent = {
  template: `
    <div class="row row-flush page-header">
      <div class="column medium-6">
        <a ui-sref="audience.list">Audience</a>
        <h2>{{$ctrl.selectedAudience.title}}</h2>
      </div>
      <div class="column medium-6 clearfix">

        <ul class="menu float-right" style="padding-top: 1.5rem">
          <li>
            <a href="" class="button primary">Create List from Audience</a>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="wrapper audience-detail-wrapper wrapper-scroll">
      <monarch-sidebar class="scroll">
        <ul class="accordion">
          <li
            class="accordion-item"
            ng-class="{'is-active': $ctrl.searchFilter.open}">
            <a
              ng-click="$ctrl.searchFilter.open = !$ctrl.searchFilter.open"
              class="accordion-title">Filter by Search</a>
            <div class="accordion-content" ng-if="$ctrl.searchFilter.open">
              <input placeholder="Search for anything" type="search" ng-model="$ctrl.searchFilter.text" ng-model-options="{ debounce: 200 }" />
            </div>
          </li>
          <li
            class="accordion-item"
            ng-class="{'is-active': $ctrl.geographiesFilter.open}">
            <a
              ng-click="$ctrl.geographiesFilter.open = !$ctrl.geographiesFilter.open"
              class="accordion-title">Geograhies</a>
            <div
              class="accordion-content"
              ng-if="$ctrl.geographiesFilter.open">
              <a href="" class="button">Add Geography Filter</a>
            </div>
          </li>
          <li
            ng-repeat="filterType in $ctrl.filterTypes track by filterType.key"
            class="accordion-item"
            ng-class="{'is-active': filterType.open}">
            <a
              ng-click="filterType.open = !filterType.open"
              class="accordion-title">{{filterType.title}}</a>
            <div class="accordion-content checkbox-list" ng-if="filterType.open">
              <label
                class="checkbox"
                ng-repeat="checkbox in filterType.data">
                <span class="checkbox-wrapper"><input
                  type="checkbox"
                  ng-model="checkbox.Enabled"
                  ng-change="$ctrl.toggleFilter(checkbox)"></span>
                <span class="checkbox-label">{{checkbox.Name}}</span> <span class="checkbox-value">{{checkbox.Quantity | number}}</span>
              </label>
            </div>
          </li>
        </ul>
        
      </monarch-sidebar>
      <monarch-page>
        <div class="audience-top">
          <div class="audience-filters">
            <ul class="brick-list">
              <li ng-if="$ctrl.searchFilter.text.length">
                <a
                  href=""
                  class="label with-close"
                  ng-click="$ctrl.searchFilter.text = '' ">
                  <span>Search: {{$ctrl.searchFilter.text}}</span>
                  <span class="close">&times;</span>
                </a>
              </li>
              <li ng-repeat="appliedFilter in $ctrl.appliedFilters.list">
                <a
                  href=""
                  class="label with-close"
                  ng-click="$ctrl.removeFilter(appliedFilter)">
                  <span class="filter-type">{{appliedFilter.filterType.title}}:</span> <span class="filter-value">{{appliedFilter.Name}}</span>
                  <span class="close">&times;</span>
                </a>
              </li>
              <li ng-if="$ctrl.appliedFilters.list.length">
                
              </li>
              <li class="apply-a-filter" ng-if="!$ctrl.appliedFilters.list.length && !$ctrl.searchFilter.text.length">
                &larr; Apply a filter
              </li>
            </ul>
            <a ng-if="$ctrl.appliedFilters.list.length || $ctrl.searchFilter.text.length" href="" ng-click="$ctrl.clearAllFilters()">Clear all filters</a>
          </div>
          <div class="audience-stats">
            <div class="stat">{{$ctrl.counts.total}}</div>
            <p class="stat-heading">Households</p>
          </div>
        </div>
        <div class="audience-bottom">
          <div class="card-list" ng-if="$ctrl.displayMode === 'list'">
            <div
              class="card"
              ng-repeat="person in $ctrl.audienceDisplay track by person.id">
              <div class="row row-flush collapse">
                <div class="column large-4">
                  <div class="card-title">{{person.firstName}} {{person.lastName}}</div>
                  {{person.gender}} - {{person.age}}

                </div>
                <div class="column large-4">
                  <div>{{person.address}}</div>
                  {{person.city}}
                </div>
                <div class="column large-4">
                  {{person.email}}
                </div>
              </div>
            </div>
          </div>
          <div class="audience-map" ng-if="$ctrl.displayMode === 'map'"></div>
        </div>

        <div class="button-group audience-display-view">
          <a href="" ng-click="$ctrl.displayMode = 'map'" ng-class="{'primary': $ctrl.displayMode === 'map'}" class="button">Map</a>
          <a href="" ng-click="$ctrl.displayMode = 'list'" ng-class="{'primary': $ctrl.displayMode === 'list'}" class="button">List</a>
        </div>
        
        
      </monarch-page>
    </div>
  `,
  controller: class AudienceDetailComponent {
    constructor(audiences, filterTypeData, filterTypes, $stateParams, $scope, $filter) {
      'ngInject';

      this.displayMode = 'map';

      this.searchFilter = {
        open: true,
        text: ''
      };
      this.geographiesFilter = {
        open: false
      };
      this.listsFilter = {
        open: false
      };

      this.appliedFilters = {
        open: true,
        list: []
      }




      if ($stateParams.audienceId.toUpperCase() === 'ADD') {
        this.selectedAudience = Object.assign({}, audiences[0], {
          title: 'New Audience'
        });
        
      } else {
        this.selectedAudience = audiences.find((audience)=>audience.audienceId === parseInt($stateParams.audienceId));
      }
      this.persons = this.selectedAudience.persons;
      this.audience = angular.copy(this.persons);
      
      this.audienceDisplay = limitAudience(this.audience)
      this.audiences = audiences;
      this.stateParams = $stateParams;
      this.counts = {};

      function limitAudience(audience) {
        return $filter('limitTo')(audience, 150);
      }

      $scope.$watch(()=>this.searchFilter.text, (newVal)=>{
        this.audience = $filter('filter')(this.persons, newVal);
        this.audienceDisplay = limitAudience(this.audience);
        this.counts = {
          total: $filter('number')(this.audience.length),
          individuals: $filter('number')(this.audience.filter((person)=>person.type==='individual').length),
          households: $filter('number')(this.audience.filter((person)=>person.type==='household').length)
        };
      });


      this.filterTypes = filterTypes.map(filterType=>Object.assign(
        {},
        filterType,
        {
          data: filterTypeData[filterType.key].map(checkbox=>Object.assign(
            {},
            checkbox,
            {filterType: filterType}
          ))
        }

      ));

      
    }
    toggleFilter(checkbox) {
      (checkbox.Enabled) ? this.addFilter(checkbox) : this.removeFilter(checkbox);
    }
    addFilter(checkbox) {
      this.appliedFilters.list.push(checkbox);
    }
    removeFilter(checkbox) {
      checkbox.Enabled = false;
      let i = this.appliedFilters.list.indexOf(checkbox);
      if(i != -1) {
        this.appliedFilters.list.splice(i, 1);
      }
    }
    clearAllFilters() {
      this.searchFilter.text = '';
      this.appliedFilters.list.forEach((checkbox)=>{
        checkbox.Enabled = false;
      });

      this.appliedFilters.list = [];

    }
  }
};