(function (app) {
  'use strict';

  app.directive('iuiActivityForm', activityForm);

  function activityForm() {
    var directive = {
      templateUrl: '/directives/goals/iui-activity-form.html',
      restrict: 'E',
      controller: ActivityFormController,
      scope: {
        goal:'='
      }
    };
    return directive;
  }

  ActivityFormController.$inject = ['$scope', 'goals'];

  function ActivityFormController($scope, goals) {
    if ($scope.goal && $scope.goal.TaskTypeName) {
      app.routing.data.title = $scope.task.TaskTypeName;
    }
    $scope.goals = goals;
  }

})(window.app);