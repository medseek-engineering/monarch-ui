(function (app) {
  'use strict';

  app.directive('iuiGoalsList', goalsList);

  function goalsList() {
    var directive = {
      templateUrl: '/directives/goals/iui-goals-list.html',
      restrict: 'EA',
      controller: GoalsListController
    };
    return directive;
  }

  GoalsListController.$inject = ['$scope', 'goals'];

  function GoalsListController($scope, goals) {
    $scope.goals = goals;
  }

})(window.app);