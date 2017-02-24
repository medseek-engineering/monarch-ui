
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


export const LeadsComponent = {
  controller: class LeadsComponent {
    constructor($stateParams, $filter, $scope, $state) {
      'ngInject';
      this.leads = {
        today: $filter('limitTo')(leads, 5, 0),
        yesterday: $filter('limitTo')(leads, 5, 5)
      };

      

      this.$state = $state;

      this.stateParams = $stateParams;
      this.displayFields = displayFields;

      this.stateParams.today = JSON.parse(this.stateParams.today);
      this.stateParams.yesterday = JSON.parse(this.stateParams.yesterday);

      $scope.$watch(()=>$stateParams.leadId, (newVal)=>{
        if(!newVal) {
          return;
        }
        this.selected = leads.find((element)=>{
          return element.id === parseInt(newVal);
        })
      });
    }
  },
  template: `
    <div
      class="crm-wrapper wrapper with-sidebar with-side-panel"
      ng-class="{'side-panel-open': $ctrl.stateParams.leadId}">
      <monarch-sidebar>
        <crm-sidebar></crm-sidebar>
      </monarch-sidebar>
      <monarch-page>
        <filter-bar
          search-filter="$ctrl.searchFilter"
          place-holder-text="Search Leads"
          cta-button-text="Add Lead"
          cta-button-sref="crm.leads({leadId: 'ADD'})">
        </filter-bar>
        <ul class="accordion">
          <li class="accordion-item" ng-class="{'is-active': $ctrl.stateParams.today}">
            <a ui-sref="crm.leads({today: !$ctrl.stateParams.today})" class="accordion-title">Today</a>
            <div class="accordion-content">
              <leads-list class="card-list" leads="$ctrl.leads.today"></leads-list>
            </div>
          </li>
          <li class="accordion-item" ng-class="{'is-active': $ctrl.stateParams.yesterday}">
            <a ui-sref="crm.leads({yesterday: !$ctrl.stateParams.yesterday})" class="accordion-title">Yesterday</a>
            <div class="accordion-content">
              <leads-list class="card-list" leads="$ctrl.leads.yesterday"></leads-list>
            </div>
          </li>
        </ul>
      </monarch-page>
      <monarch-side-panel class="side-panel" ng-if="$ctrl.stateParams.leadId">
        <button class="close-button" aria-label="Close menu" type="button" ui-sref="crm.leads({leadId: null})">
          <span aria-hidden="true">&times;</span>
        </button>
        <div ng-if="$ctrl.stateParams.leadId !== 'ADD'">
          <h6>{{$ctrl.selected.id}}</h6>
          <h2>{{$ctrl.selected.firstName}} {{$ctrl.selected.lastName}}</h2>
          <small>{{$ctrl.selected.lastUpdated}}</small>
          <dl class="large-list">
            <dt ng-repeat-start="field in $ctrl.displayFields track by field.field">{{field.name}}</dt>
            <dd ng-repeat-end>{{$ctrl.selected[field.field]}}</dd>
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
          <label ng-repeat="field in $ctrl.displayFields track by field.field">
            {{field.name}}
            <input type="text">
          </label>
        </div>
      </monarch-side-panel>
    </div>
  `
};