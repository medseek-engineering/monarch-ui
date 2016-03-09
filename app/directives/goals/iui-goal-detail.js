(function (app) {
  'use strict';

  app.directive('iuiGoalDetail', goalDetail);

  function goalDetail() {
    var directive = {
      templateUrl: '/directives/goals/iui-goal-detail.html',
      restrict: 'E',
      controller: GoalDetailController,
      scope: {
        goalId:'='
      }
    };
    return directive;
  }

  GoalDetailController.$inject = ['$scope', 'goals', '$location'];

  function GoalDetailController($scope, goals, $location) {
    var goalId = parseInt($scope.goalId);
    $scope.goals = goals;
    $scope.delete = deleteGoal;
    $scope.complete = completeGoal;

    if (goalId) {
      $scope.goal = _.findWhere(goals.list, {goalId: goalId });
      if ($scope.goal) {
        app.routing.data.title = $scope.goal.goalName;
      }
    }

    function deleteGoal(goal) {
      var index = goals.list.indexOf(goal);
      if (index > -1) {
        goals.list.splice(index, 1);
        $location.path('/goals/');
      }
    }

    function completeGoal(goal) {
      goal.goalCompletedDate = new Date();
      goal.statusCode = 'Completed';
    }
  }

})(window.app);
