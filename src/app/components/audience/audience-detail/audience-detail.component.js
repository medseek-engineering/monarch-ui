export const AudienceDetailComponent = {
  template: `
    <div class="row row-flush page-header">
      <div class="column medium-6">
        <a ui-sref="audience.list">Audience</a>
        <h2>{{$ctrl.selectedAudience.title}}</h2>
      </div>
      <div class="column medium-6 clearfix">

        <ul class="dropdown dropdown-on-right menu float-right" style="padding-top: 1.5rem" dropdown-menu>
          <li style="padding-right: 1rem">
            <a ui-sref="audience" class="button">Cancel</a>
          </li>
          <li>
            <a tabindex="0" class="button primary">Save&hellip;</a>
            <ul class="menu">
              <li><a href="" ng-click="$ctrl.saveAndClose($ctrl.selectedAudience)">and Close</a></li>
              <li><a href="" ng-click="$ctrl.saveAndCreateList($ctrl.selectedAudience)">and Create List</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <audience-builder
      person-list="$ctrl.selectedAudience.persons"></audience-builder>
  `,
  controller: class AudienceDetailComponent {
    constructor(audiences, $stateParams, $state) {
      'ngInject';

      this.audiences = audiences;
      this.stateParams = $stateParams;
      this.$state = $state;
      
    }

    $onInit() {

      if (this.stateParams.audienceId.toUpperCase() === 'ADD') {

        this.selectedAudience = Object.assign(
          {},
          this.audiences[0],
          {
            title: 'Audience #'.concat(this.audiences.length),
            audienceId: this.audiences[0].audienceId + 1
          }
        );
        
      } else {
        this.selectedAudience = this.audiences.find((audience)=>audience.audienceId === parseInt(this.stateParams.audienceId));
      }
      
    }
    saveAndClose(audience) {
      this.audiences.push(audience);
      this.$state.go('audience');
    }
    saveAndCreateList(audience) {
      this.audiences.push(audience);
      this.$state.go('lists.createList', {mode: 'audience', audienceId: audience.audienceId});
    }
  }
};