export const AppComponent = {
  template: `
    <monarch-header></monarch-header>
    <div class="monarch-site-body" ui-view></div>
    <monarch-footer></monarch-footer>
  `,
  controller: class AppComponent {
    constructor($transitions, $state, $window) {
      'ngInject';
      $transitions.onSuccess({ }, function(trans) {
        $window.document.title = 'Influence Health - ' + $state.current.title;
      });
    }
  }
};