(function (app) {
  'use strict';

  app.directive('iuiLongitudinalView', longitudinalView);

  function longitudinalView() {
    var directive = {
      templateUrl: '/directives/health-information/iui-longitudinal-view.html',
      restrict: 'E',
      controller: LongitudinalViewController,
      scope: {}
    };
    return directive;
  }

  LongitudinalViewController.$inject = ['$scope', 'healthInformation'];

  function LongitudinalViewController($scope, healthInformation) {
    $scope.healthInformation = healthInformation;
  }

})(window.app);