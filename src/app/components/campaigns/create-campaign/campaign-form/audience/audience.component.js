export const AudienceComponent = {
  bindings: {
    campaign: '='
  },
  template: `
    <section>
      <header class="row">
        <div class="columns small-12 clearfix">
          <hr>
          <h3>Audience</h3>
        </div>
      </header>
      <div>
        <fieldset class="row">
          <div class="columns large-4">
            <label class="middle text-right">Who should see this ad?</label>
          </div>
          <div class="columns large-8 campaign-audience-sources">
            <div class="radio-list">
              <div class="radio-list-item">
                <label><input
                  type="radio"
                  id="campaign-audience-source-contacts"
                  name="audienceSource"
                  value="list"
                  ng-model="$ctrl.campaign.audienceSource">Contacts on a list</label>
              </div>
              <label ><input
                type="radio"
                id="campaign-audience-source-similar"
                name="audienceSource"
                value="similar"
                ng-model="$ctrl.campaign.audienceSource">People similar to your list contacts</label>
              <label class="radio-list-item"><input
                type="radio"
                id="campaign-audience-source-custom"
                name="audienceSource"
                value="custom"
                ng-model="$ctrl.campaign.audienceSource">People with interests you define</label>
            </div>
          </div>
        </fieldset>
        
        
        <div
          class="row"
          ng-if="$ctrl.campaign.audienceSource === 'list' || $ctrl.campaign.audienceSource === 'similar'">
          <div class="column large-4">
            <label
              class="middle text-right">List</label>
          </div>
          <div class="column large-8">
            <select-list
              selected-list="$ctrl.campaign.list">
            </select-list>
            <div class="select-link">
              <a href="">Create New List&hellip;</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  controller: class AudienceComponent {
    constructor() {
      'ngInject';
    }
    $onInit() {
    }
  }
};