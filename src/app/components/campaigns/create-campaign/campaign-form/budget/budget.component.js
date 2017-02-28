import moment from 'moment';


export const BudgetComponent = {
  bindings: {
    campaign: '='
  },
  template: `
    <section>
      <header class="row">
        <div class="columns small-12 clearfix">
          <hr>
          <h3>Budget </h3>
        </div>
      </header>
      <div>
        <div class="row">
          <div class="column large-4">
            <label
              class="middle text-right"
              for="campaign-starts">Start</label>
          </div>
          <div class="column large-8">
            <input
              class="inline-form-field"
              id="campaign-starts"
              type="date"
              ng-model="$ctrl.campaign.startDate">
          </div>
        </div>
        <div class="row">
          <div class="column large-4">
            <label
              class="middle text-right"
              for="campaign-ends">End</label>
          </div>
          <div class="column large-8">
            <select
              id="campaign-ends"
              ng-options="item as item.title for item in $ctrl.endTimes"
              ng-model="$ctrl.campaign.end"></select>
            <span ng-if="$ctrl.campaign.end.title !== 'ending on a date'" class="stat small">{{$ctrl.campaign.end.date | date}}</span>
          </div>
          
        </div>
        <div
          class="row"
          ng-if="$ctrl.campaign.end.title === 'ending on a date'">
          <div class="column large-8 large-offset-4">
            <input
              class="inline-form-field"
              type="date"
              ng-model="$ctrl.campaign.end.date">
          </div>
        </div>
        <div class="row">
          <div class="column large-4">
            <label
              class="middle text-right"
              for="campaign-budget">Budget</label>
          </div>
          <div class="column large-8">
            <span>$</span>
            <input
              class="inline-form-field budget-field"
              id="campaign-budget"
              type="number"
              ng-model="$ctrl.campaign.budget">
            <span class="stat small"> per day</span>
          </div>
        </div>
      </div>

    </section>
    
    
  `,
  controller: class BudgetComponent {
    constructor() {
      'ngInject';
    }
    $onInit() {
      this.endTimes = [
        {
          title: 'in one week',
          date: moment().add(7, 'days').toDate()
        },
        {
          title: 'in two weeks',
          date: moment().add(14, 'days').toDate()
        },
        {
          title: 'in one month',
          date: moment().add(1, 'months').toDate()
        },
        {
          title: 'ending on a date',
          date: moment().add(1, 'day').toDate()
        }
      ];
      this.campaign = Object.assign(
        {},
        this.campaign,
        {
          budget: 1,
          startDate: new Date(),
          end: this.endTimes[0]
        }
      )
    }
  }
};