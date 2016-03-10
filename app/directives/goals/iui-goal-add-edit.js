(function (app) {
  'use strict';

  app.directive('iuiGoalAddEdit', goalAddEdit);

  function goalAddEdit() {
    var directive = {
      templateUrl: '/directives/goals/iui-goal-add-edit.html',
      restrict: 'E',
      controller: GoalAddEditController,
      scope: {
        routeParams: '='
      }
    };
    return directive;
  }

  GoalAddEditController.$inject = ['$scope', 'goals', '$location'];

  function GoalAddEditController($scope, goals, $location) {

    var goalId      =  parseInt($scope.routeParams.goalId);
    var activityId  =  parseInt($scope.routeParams.activityId);

    $scope.editMode =  false;
    var original;
    var originalGoal;

    $scope.goals    =  goals;


    if (goalId) {
      original   =  _.findWhere(goals.list, { goalId: goalId });
    }

    if (original) {
      app.routing.data.title = 'Edit ' + original.goalName;
      $scope.editMode = true;
      $scope.goal = angular.copy(original);
    } else {
      $scope.goal = {};
    }

    $scope.save = function() {
      if ($scope.editMode) {
        var index = goals.list.indexOf(original);
        if (index  !== -1) {
          goals.list[index] = $scope.goal;
        }
      } else {
        $scope.goal.goalId = goals.list.length + 1;
        $scope.goal.progressMilestone = 0;
        $scope.goal.completedDate = null;
        $scope.goal.statusCode = 'Active';
        $scope.goal.patientActivities = [];

        goals.list.push($scope.goal);
      }
      $location.path('/goals/detail/' + $scope.goal.goalId  );
    };
  }

})(window.app);