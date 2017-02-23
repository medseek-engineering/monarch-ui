export const CreateListFormComponent = {
  bindings: {
    list: '=',
    audienceOpen: '='
  },
  template: `
    <div class="wrapper">
      <monarch-page class="page-full">
        <form
          ng-submit="$ctrl.submit($ctrl.list)"
          class="form-wrapper">
          <div class="row">
            <div class="column large-4">
              <label
                class="middle text-right"
                for="list-name">List Name</label>
            </div>
            <div class="column large-8">
              <input
                id="list-name"
                type="text"
                ng-model="$ctrl.list.title">
            </div>
          </div>
          <div class="row">
            <div class="column large-4">
              <label
                class="middle text-right"
                for="list-source">Source</label>
            </div>
            <div class="column large-8">
              <select
                id="list-source"
                ng-options="item as item.source for item in $ctrl.createListModes track by item.mode"
                ng-model="$ctrl.list.source">
              </select>
            </div>
          </div>
          <div
            class="row"
            ng-if="$ctrl.list.source.mode === 'audience'">
            
            <div class="columns large-4">
              <label
                class="middle text-right"
                for="list-audience">Audience</label>
            </div>
            <div class="columns large-8">
              <div class="row collapse">
                <div class="columns large-8">
                  
                </div>
                <div class="columns large-4">
                  
                </div>
              </div>

              <select-audience
                    selected-audience="$ctrl.list.audience"></select-audience>
              <span class="stat small">{{$ctrl.list.audience.persons.length | number}} Households</span>
               

              <div class="select-link">
                <a
                  href=""
                  ui-sref="lists.createList.audience">Create New Audience&hellip;</a>
              </div>
              
            </div>
          </div>
          <div class="row">
            <div class="columns large-8 large-offset-4">
              <button
                class="button primary"
                type="submit">Save</button>
              <button
                class="button"
                ui-sref="lists">Cancel</button>
            </div>
          </div>
          
        </form>
      
      </monarch-page>
    </div>
  `,
  controller: class CreateListFormComponent {
    constructor(createListModes) {
      'ngInject';
      this.createListModes = createListModes;
      this.personList = [];
    }
  }
};