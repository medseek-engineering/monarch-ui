export const AppComponent = {
  template: `
    <monarch-header
      ng-if="!$ctrl.$state.current.hideHeader"></monarch-header>
    <div ng-class="{'monarch-site-body':!$ctrl.$state.current.hideHeader }">
      <page-header current-state="$ctrl.$state.current"></page-header>
      <div ui-view></div>
    </div>
    <monarch-footer
      ng-if="!$ctrl.$state.current.hideFooter"></monarch-footer>
  `,
  controller: class AppComponent {
    constructor($transitions, $state, $window) {
      'ngInject';
      this.$state = $state;
      $transitions.onSuccess({ }, function(trans) {
        $window.document.title = 'Influence Health - ' + $state.current.title;
      });
    }
  }
};