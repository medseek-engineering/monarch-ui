export const ListDetailComponent = {
  template: `
    <div
      class="wrapper">
      <monarch-page>
        
      </monarch-page>
    </div>
  `,
  controller: class ListDetailComponent {
    constructor(lists, $stateParams, $state) {
      'ngInject';
      this.lists = lists;
      this.stateParams = $stateParams;
      this.$state = $state;
    }
    $onInit() {

      this.list = this.lists.find((list) => list.listId === parseInt(this.stateParams.listId) );
      this.$state.current.title = this.list.title;
    }
  }
};