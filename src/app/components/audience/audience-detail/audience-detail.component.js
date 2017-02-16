function getRandomFromArray(textArray){
  let randomNumber = Math.floor(Math.random()*textArray.length);
  return textArray[randomNumber];
}



let persons = [];
let i = 0;
for (i = 0; i < 200; i++) {
  const person = {
    id: 4917580,
    firstName: getRandomFromArray(['Adam', 'Brittany', 'Ryan', 'Leslie', 'Benjamin', 'Patricia', 'Jeff', 'Harper']),
    lastName: getRandomFromArray(['Jones', 'Smith', 'West', 'Banala', 'Smith-Jones', 'Strong', '', 'Johnson', 'Smithhart']),
    address: getRandomFromArray(['123 Address St, Birmingham, AL 35216', '249 Avenue St, Alabaster, AL 35007'])
  };
  persons = persons.concat([Object.assign({}, person, {
    id: person.id - i,
    email: person.firstName.toLowerCase() + person.lastName.toLowerCase() + '@example.com'
  })]);
  i = i + 1;
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
            ng-repeat="filterType in $ctrl.filterTypes track by filterType.key"
            class="accordion-item"
            ng-class="{'is-active': filterType.open}">
            <a
              ng-click="filterType.open = !filterType.open"
              class="accordion-title">{{filterType.title}}</a>
            <div class="accordion-content">
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
              <div class="columns large-4">
                <p class="stat-heading">Total</p>
                <div class="stat">3,019</div>
              </div>
              <div class="columns large-4">
                <p class="stat-heading">Individuals</p>
                <div class="stat">2,019</div>
              </div>
              <div class="columns large-4">
                <p class="stat-heading">Families</p>
                <div class="stat">1,084</div>
              </div>
            </div>
            
          </div>
          <div class="map"></div>
        </div>
        <div class="person-card-list card-list">
          <div
            class="card"
            ng-repeat="person in $ctrl.audience">
            <div class="row row-flush collapse">
              <div class="column large-4">
                <div class="card-title">{{person.firstName}} {{person.lastName}}</div>
              </div>
              <div class="column large-4">
                {{person.address}}
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
    constructor(audiences, filterTypeData, filterTypes, $stateParams) {
      'ngInject';
      this.audience = persons;
      this.audiences = audiences;
      this.stateParams = $stateParams;
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