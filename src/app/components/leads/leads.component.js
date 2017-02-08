import template from './leads.html';


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
  template,
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
  }
};