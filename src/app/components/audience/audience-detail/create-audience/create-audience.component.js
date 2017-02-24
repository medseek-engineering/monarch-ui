export const CreateAudienceComponent = {
  bindings: {
    audience: '<',
    onCancel: '=',
    onSave: '='
  },
  template: `

    <div class="full-screen">
      <header class="full-screen-header">
        <a ui-sref="dashboard" class="full-screen-logo"></a>
        <button
          class="close-button"
          aria-label="Close"
          type="button"
          ng-click="$ctrl.onCancel($ctrl.selectedAudience)">
           <span aria-hidden="true">&times;</span>
        </button>
        <h3 class="full-screen-heading">Create List: Create Audience</h3>
        <small class="full-screen-small-text">Healthcare Marketing - Peachtree Hospital</small>
      </header>
      <div class="row row-flush page-header">
        
        <div class="column medium-4">

          <h2>{{$ctrl.selectedAudience.title}}</h2>
        </div>
        <div class="column medium-6 clearfix">
          <ul
            class="menu float-right"
            style="padding-top: 0.5rem">
            <li>
              <a
                href=""
                ng-click="$ctrl.save($ctrl.selectedAudience)"
                class="button primary">Save Audience</a>
            </li>
          </ul>
        </div>
      </div>
      <audience-builder
        person-list="$ctrl.selectedAudience.persons"></audience-builder>
    </div>
  `,
  controller: class CreateAudienceComponent {
    constructor(audiences) {
      'ngInject';
      this.audiences = audiences;
    }
    $onInit() {
      this.selectedAudience = Object.assign(
        {},
        this.audience,
        {
          title: 'Audience #'.concat(this.audiences.length)
        }
      );
    }
    save(audience) {
      this.audiences.push(audience);
      this.onSave(audience);
    }
  }
};