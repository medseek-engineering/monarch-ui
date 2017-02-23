export const PageHeaderComponent = {
  bindings: {
    currentState: '<'
  },

  template: `
    <div
      class="row row-flush page-header"
      ng-if="!$ctrl.currentState.hidePageHeader">
      <div
        class="column"
        ng-if="$ctrl.currentState.breadcrumb && $ctrl.currentState.breadcrumb.length">
        <breadcrumb breadcrumb="$ctrl.currentState.breadcrumb"></breadcrumb>
      </div>
      <div class="column">
        <h2>{{$ctrl.currentState.title}}</h2>
      </div>
    </div>
  `
};