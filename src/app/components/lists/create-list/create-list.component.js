export const CreateListComponent = {
  template: `
    <div
      class="wrapper">
      <monarch-page>
        <form ng-submit="$ctrl.submit($ctrl.list)" class="form-wrapper">
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
                ng-options="item as item.title for item in $ctrl.createListModes track by item.mode"
                ng-model="$ctrl.list.source">
              </select>
            </div>
          </div>
          <div class="row" ng-if="$ctrl.list.source.mode === 'existingAudience'">
            <div class="columns large-12">
              <hr>
            </div>
            <div class="column large-4">
              <label
                class="middle text-right"
                for="list-audience">Audience</label>
            </div>
            <div class="column large-8">
              <select
                id="list-audience"
                ng-options="item as item.title for item in $ctrl.createListModes track by item.mode"
                ng-model="$ctrl.list.source">
              </select>
            </div>
          </div>
          <div class="row">
            <div class="columns large-8 large-offset-4">
              <button class="button primary" type="submit">Save and Continue</button>
            </div>
          </div>
          
        </form>
        
      </monarch-page>
    </div>
  `,
  controller: class CreateListComponent {
    constructor(lists, $stateParams, createListModes, $state) {
      'ngInject';
      this.dropdownOpen = false;
      this.lists = lists;
      this.stateParams = $stateParams;
      this.$state = $state;
      this.createListModes = createListModes;
    }
    $onInit() {
      this.list = {
        title: '',
        source: this.createListModes.find((mode) => mode.mode === this.stateParams.mode )
      };
    }
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    }
  }
};