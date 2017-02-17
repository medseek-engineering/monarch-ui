function getRandomFromArray(textArray){
  let randomNumber = Math.floor(Math.random()*textArray.length);
  return textArray[randomNumber];
}

function getRandomStreetNumber() {
 return Math.floor(Math.random()*1000) + 100;
}


let persons = [];
let i = 0;
for (i = 0; i < 1268; i++) {
  const person = {
    id: 4917580,
    firstName: getRandomFromArray(['Adam', 'Brittany', 'Ryan', 'Leslie', 'Benjamin', 'Patricia', 'Jeff', 'Harper']),
    lastName: getRandomFromArray(['Jones', 'Smith', 'West', 'Banala', 'Smith-Jones', 'Strong', '', 'Johnson', 'Smithhart']),
    address: getRandomFromArray([getRandomStreetNumber() + ' Address St', getRandomStreetNumber() + ' Avenue St', getRandomStreetNumber() + ' 1st Ave S', getRandomStreetNumber() + ' 2nd Ave S', getRandomStreetNumber() + ' 3rd Ave N', getRandomStreetNumber() + ' 5th Ave S', getRandomStreetNumber() + ' University Blvd']),
    city: getRandomFromArray(['Birmingham, AL 35216', 'Alabaster, AL 35007', 'Atlanta, GA 30002', 'Atlanta, GA 30033']),
    type: getRandomFromArray(['individual', 'household']),
    gender: getRandomFromArray(['Male', 'Female', 'Unknown']),
    age: Math.floor(Math.random()*70) + 18
  };
  persons = persons.concat([Object.assign({}, person, {
    id: person.id - i,
    email: person.firstName.toLowerCase() + person.lastName.toLowerCase() + '@example.com'
  })]);
  //i = i + 1;
}

export const AudienceDetailComponent = {
  template: `
    <div class="row row-flush page-header">
      <div class="column medium-6">
        <a ui-sref="audience.list">Audience</a>
        <h2>High Risk for Heart Disease</h2>
      </div>
      <div class="column medium-6">
        <ul class="menu page-actions" style="padding-top: 1rem">
          <li>
            <a href="" class="button primary">Create List from Audience</a>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="wrapper audience-detail-wrapper wrapper-scroll">
      <monarch-sidebar class="scroll">
        <ul class="accordion">
          <li
            class="accordion-item"
            ng-class="{'is-active': $ctrl.searchFilter.open}">
            <a
              ng-click="$ctrl.searchFilter.open = !$ctrl.searchFilter.open"
              class="accordion-title">Filter by Search</a>
            <div class="accordion-content" ng-if="$ctrl.searchFilter.open">
              <input placeholder="Search for anything" type="search" ng-model="$ctrl.searchFilter.text" ng-model-options="{ debounce: 200 }" />
            </div>
          </li>
          <li
            class="accordion-item"
            ng-class="{'is-active': $ctrl.geographiesFilter.open}">
            <a
              ng-click="$ctrl.geographiesFilter.open = !$ctrl.geographiesFilter.open"
              class="accordion-title">Geograhies</a>
            <div class="accordion-content" ng-if="$ctrl.geographiesFilter.open">
              <a href="" class="button">Add Geography Filter</a>
            </div>
          </li>
          <li
            ng-repeat="filterType in $ctrl.filterTypes track by filterType.key"
            class="accordion-item"
            ng-class="{'is-active': filterType.open}">
            <a
              ng-click="filterType.open = !filterType.open"
              class="accordion-title">{{filterType.title}}</a>
            <div class="accordion-content" ng-if="filterType.open">
              <label class="checkbox" ng-repeat="checkbox in filterType.data">
                <input type="checkbox" checked />
                {{checkbox.Name}}
              </label>
            </div>
          </li>
        </ul>
        
      </monarch-sidebar>
      <monarch-page>
        <div class="audience-top">
          <div class="audience-stats">
            <div class="row collapse">
              <div class="columns large-6">
                <p class="stat-heading">Individuals</p>
                <div class="stat">{{$ctrl.counts.individuals}}</div>
              </div>
              <div class="columns large-6">
                <p class="stat-heading">Households</p>
                <div class="stat">{{$ctrl.counts.households}}</div>
              </div>
            </div>
            
          </div>
          <div class="map"></div>
        </div>
        <div class="person-card-list card-list">
          <div
            class="card"
            ng-repeat="person in $ctrl.audience track by person.id">
            <div class="row row-flush collapse">
              <div class="column large-4">
                <div class="card-title">{{person.firstName}} {{person.lastName}}</div>
                {{person.gender}} - {{person.age}}

              </div>
              <div class="column large-4">
                <div>{{person.address}}</div>
                {{person.city}}
              </div>
              <div class="column large-4">
                {{person.email}}
              </div>
            </div>
          </div>
        </div>
        
      </monarch-page>
    </div>
  `,
  controller: class AudienceDetailComponent {
    constructor(audiences, filterTypeData, filterTypes, $stateParams, $scope, $filter) {
      'ngInject';
      this.searchFilter = {
        open: true,
        text: ''
      };
      this.geographiesFilter = {
        open: false
      };
      this.listsFilter = {
        open: false
      };
      this.audience = persons;
      this.audiences = audiences;
      this.stateParams = $stateParams;
      this.counts = {};

      

      $scope.$watch(()=>this.searchFilter.text, (newVal)=>{
        this.audience = $filter('filter')(persons, newVal);
        this.counts = {
          total: $filter('number')(this.audience.length),
          individuals: $filter('number')(this.audience.filter((person)=>person.type==='individual').length),
          households: $filter('number')(this.audience.filter((person)=>person.type==='household').length)
        };
      });

      this.filterTypes = filterTypes.map(filterType=>Object.assign(
        {},
        filterType,
        {
          data: filterTypeData[filterType.key]
        }

      ));
    }
  }
};