export const AudienceListComponent = {
  template: `
    <div class="row row-flush page-header">
      <div class="column">
        <h2>Audience</h2>
      </div>
    </div>
    <pre>{{$ctrl.audiences | json}}</pre>


  `,
  controller: class AudienceListComponent {
    constructor(audiences) {
      'ngInject';
      this.audiences = audiences;
    }
  }
};