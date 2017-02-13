//import templateUrl from './leads.html';


function getRandomFromArray(textArray){
  let randomNumber = Math.floor(Math.random()*textArray.length);
  return textArray[randomNumber];
}



let leads = [];
let i = 0;
for (i = 0; i < 200; i++) {
  const lead = {
    id: 4917580,
    status: getRandomFromArray(['New', 'Phone', 'Manual']),
    type: getRandomFromArray(['Form', 'Phone', 'Manual']),
    channel: getRandomFromArray(['Direct Mail', 'Print', 'Organic', '', '', 'Email', 'Internet Radio', 'External Google', 'Google']),
    tier2: getRandomFromArray(['Peachtree Hospital', 'Peachtree Hospital', 'Client Partner Arena', 'MedSports Ortho']),
    tier3: getRandomFromArray(['General Practice', 'Women\'s Services', 'Bariatrics', '']),
    location: 'N/A',
    source: getRandomFromArray(['Email form', '(334) 452-7989', '(502) 452-7001', 'Event Registration', 'Seminar form', 'Maternity - About Us']),
    firstName: getRandomFromArray(['Adam', 'Brittany', 'Ryan', 'Leslie', 'Benjamin', 'Patricia', 'Jeff', 'Harper']),
    lastName: getRandomFromArray(['Jones', 'Smith', 'West', 'Banala', 'Smith-Jones', 'Strong', '', 'Johnson', 'Smithhart']),
    optIn: 'Yes',
    primaryRisk: 'N/A',
    email: 'rjones@gmail.com',
    callerId: '',
    updated: '02/01/2017 2:14 pm'
  };
  leads = leads.concat([Object.assign({}, lead, {
    id: lead.id - i
  })]);
  i = i + 1;
}

const displayFields = [
  {
    field: 'email',
    name: 'Email'
  },
  {
    field: 'status',
    name: 'Status'
  },
  {
    field: 'type',
    name: 'Type'
  },
  {
    field: 'channel',
    name: 'Channel'
  },
  {
    field: 'tier2',
    name: 'Tier 2'
  },
  {
    field: 'tier3',
    name: 'Tier 3'
  },
  {
    field: 'location',
    name: 'Location'
  },
  {
    field: 'optIn',
    name: 'Opt-In'
  },
  {
    field: 'primaryRisk',
    name: 'Primary Risk'
  }
];


export const CRMComponent = {
  controller: class CRMComponent {
    constructor($stateParams, $filter, $scope, $state) {
      'ngInject';
      this.leads = {
        today: $filter('limitTo')(leads, 5, 0),
        yesterday: $filter('limitTo')(leads, 5, 5)
      };

      

      this.$state = $state;

      this.stateParams = $stateParams;
      this.displayFields = displayFields;

      console.log('state loaded', this.stateParams.today);
      this.stateParams.today = JSON.parse(this.stateParams.today);
      this.stateParams.yesterday = JSON.parse(this.stateParams.yesterday);

      $scope.$watch(()=>$stateParams.leadId, (newVal)=>{
        if(!newVal) {
          return;
        }
        this.selectedLead = leads.find((element)=>{
          return element.id === parseInt(newVal);
        })
      });
    }
  },
  template: `
  <div class="row row-flush small-up-1 medium-up-2 page-header">
  <div class="column">
    <h2>CRM</h2>
  </div>
  <div class="column">
    <ul class="page-actions dropdown menu dropdown-large" dropdown-menu>
      <li>
        <a ui-sref="leads({leadId: 'ADD'})" class="button">Add Lead</a>
      </li>
    </ul>
  </div>
</div>
<div class="wrapper with-sidebar with-side-panel" ng-class="{'side-panel-open': $ctrl.stateParams.leadId}">
  <monarch-sidebar>
    <nav>
      <ul class="menu vertical">
        <li
          ui-sref-active="active"><a
          ui-sref="leads({box: 'all'})">All <span class="badge">2404</span></a>
        </li>
        <li
          ui-sref-active="active"><a
          ui-sref="leads({box: 'interested'})">Interested <span class="badge">456</span></a></li>
        <li
          ui-sref-active="active"><a
          ui-sref="leads({box: 'conversion'})">Conversion <span class="badge">2153</span></a></li>
        <li
          ui-sref-active="active"><a
          ui-sref="leads({box: 'ineligible'})">Ineligible <span class="badge">54</span></a></li>
        
      </ul>
    </nav>
  </monarch-sidebar>
  <monarch-page>
    <div class="filter-bar">
      <ul class="dropdown menu" dropdown-menu>
        <li>
          <a href="" class="button">Filter</a>
          <ul class="menu">
            <li><a href="">Create Filter</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="accordion">
      <div class="accordion-group"></div>
    </div>
    <ul class="accordion">
      <li class="accordion-item" ng-class="{'is-active': $ctrl.stateParams.today}">
        <a ui-sref="leads({today: !$ctrl.stateParams.today})" class="accordion-title">Today</a>
        <div class="accordion-content">
          <a
            ui-sref="leads({box: $ctrl.stateParams.box, leadId: lead.id })"
            ui-sref-active="active"
            class="card"
            ng-class="{'card-new': lead.status === 'New'}"
            ng-repeat="lead in $ctrl.leads.today track by lead.id">
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
        </div>
      </li>
      <li class="accordion-item" ng-class="{'is-active': $ctrl.stateParams.yesterday}">
        <a ui-sref="leads({yesterday: !$ctrl.stateParams.yesterday})" class="accordion-title">Yesterday</a>
        <div class="accordion-content">
          <a
            ui-sref="leads({box: $ctrl.stateParams.box, leadId: lead.id })"
            ui-sref-active="active"
            class="card"
            ng-class="{'card-new': lead.status === 'New'}"
            ng-repeat="lead in $ctrl.leads.yesterday track by lead.id">
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
        </div>
      </li>
    </ul>
  </monarch-page>
  <monarch-side-panel ng-if="$ctrl.stateParams.leadId" class="side-panel">
    <button class="close-button" aria-label="Close menu" type="button" ui-sref="leads({leadId: null})">
      <span aria-hidden="true">&times;</span>
    </button>
    <div ng-if="$ctrl.stateParams.leadId !== 'ADD'"></div>
      <h6>{{$ctrl.selectedLead.id}}</h6>
      <h2>{{$ctrl.selectedLead.firstName}} {{$ctrl.selectedLead.lastName}}</h2>
      <small>{{$ctrl.selectedLead.lastUpdated}}</small>
      <dl class="large-list">
        <dt ng-repeat-start="field in $ctrl.displayFields track by field.field">{{field.name}}</dt>
        <dd ng-repeat-end>{{$ctrl.selectedLead[field.field]}}</dd>
      </dl>
    </div>
    <div ng-if="$ctrl.stateParams.leadId === 'ADD'">
      <h2>Add Lead</h2>
      <label>
        First Name
        <input type="text">
      </label>
      <label>
        Last Name
        <input type="text">
      </label>
    </div>
  </monarch-side-panel>
</div>


  `
};