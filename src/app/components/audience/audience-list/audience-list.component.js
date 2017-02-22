export const AudienceListComponent = {
  template: `
    <div
      class="wrapper">
      <monarch-page>
        <filter-bar
          search-filter="$ctrl.searchFilter"
          place-holder-text="Search Audiences"
          cta-button-text="Create Audience"
          cta-button-sref="audience.detail({audienceId: 'ADD'})">
        </filter-bar>
        <div class="card-list">
          <a
            ui-sref="audience.detail({audienceId: audience.audienceId })"
            class="card"
            ng-repeat="audience in $ctrl.audiences | filter:$ctrl.searchFilter">
            <audience-row audience="audience"></audience-row>
          </a>
        </div>
        
      </monarch-page>
    </div>
  `,
  controller: class AudienceListComponent {
    constructor(audiences) {
      'ngInject';
      this.audiences = audiences.map((audience)=>Object.assign(
        {},
        audience,
        {
          persons: []
        }
      ));
    }
  }
};