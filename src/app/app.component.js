export const AppComponent = {
  template: `
    <monarch-header></monarch-header>
    <div class="monarch-site-body">
      <page-header current-state="$ctrl.$state.current"></page-header>
      <div ui-view></div>
    </div>
    <monarch-footer></monarch-footer>
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