export const LeadsListComponent = {
  bindings: {
    leads: '<'
  },
  template: `
    <a
      ui-sref="crm({leadId: lead.id })"
      ui-sref-active="active"
      class="card"
      ng-class="{'card-new': lead.status === 'New'}"
      ng-repeat="lead in $ctrl.leads track by lead.id">
      <div class="row row-full collapse">
        <div class="column medium-8">
          <span class="card-title">{{lead.firstName}} {{lead.lastName}}</span> - {{lead.type}}  - {{lead.status}} - {{lead.channel}} - {{lead.source}}
        </div>
        <div class="column medium-4 text-right"><small>{{lead.id}}</small></div>
      </div>
      <div class="row row-full collapse">
        <div class="column medium-8"> {{lead.tier2}} - {{lead.tier3}}</div>
        <div class="column medium-4 text-right">{{lead.updated}}</div>
      </div>
    </a>
  `
};