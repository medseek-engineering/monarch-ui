export const CreateAudienceComponent = {
  bindings: {
    audience: '<',
    onCancel: '=',
    onSave: '='
  },
  template: `

    <div class="row row-flush page-header">
      <div class="columns medium-2">
        <small>Healthcare Marketing<br>Peachtree Hospital</small>
      </div>
      <div class="column medium-4">
        <h2>Create Audience</h2>
      </div>
      <div class="column medium-6 clearfix">
        <ul
          class="menu float-right"
          style="padding-top: 0.5rem">
          <li style="padding-right: 1rem">
            <a
              href=""
              ng-click="$ctrl.onCancel($ctrl.selectedAudience)"
              class="button">Cancel</a>
          </li>
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