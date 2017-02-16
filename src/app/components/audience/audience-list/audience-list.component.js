export const AudienceListComponent = {
  template: `
    <div class="row row-flush page-header">
      <div class="column">
        <h2>Audience</h2>
      </div>
    </div>
    <div
      class="wrapper">
      <monarch-page>
        <div class="filter-bar">
          <div class="filter-bar-left">
            <ul class="dropdown menu" dropdown-menu>
              <li class="filter-bar-input">
                <input type="search" placeholder="Search Audiences" />
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
                <a ui-sref="audience.detail({audienceId: 'ADD'})" class="button primary">Create Audience</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-list">
          <a
            ui-sref="audience.detail({audienceId: audience.audienceId })"
            class="card"
            ng-repeat="audience in $ctrl.audiences">
            <div class="row row-flush collapse">
              <div class="column medium-4 large-8">
                <div class="card-title">{{audience.title}}</div>
                Locations: {{audience.locations}}
              </div>
              <div class="column medium-4 large-3">
                {{audience.createdBy}}
              </div>
              <div class="column medium-4 large-1 text-right">
                {{audience.updated}}
              </div>
            </div>
          </a>
        </div>
        
      </monarch-page>
    </div>
  `,
  controller: class AudienceListComponent {
    constructor(audiences) {
      'ngInject';
      this.audiences = audiences;
    }
  }
};