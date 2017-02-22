export const AudienceRowComponent = {
  bindings: {
    audience: '<'
  },
  template: `
    <div class="row row-flush collapse">
      <div class="column medium-4 large-8">
        <div class="card-title">{{$ctrl.audience.title}}</div>
        Locations: {{$ctrl.audience.locations}}
      </div>
      <div class="column medium-4 large-3">
        {{$ctrl.audience.createdBy}}
      </div>
      <div class="column medium-4 large-1 text-right">
        {{$ctrl.audience.updated}}
      </div>
    </div>
  `
};