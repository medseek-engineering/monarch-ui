(function (app) {
  'use strict';

  app.directive('iuiActivityAddEdit', activityAddEdit);

  function activityAddEdit() {
    var directive = {
      templateUrl: '/directives/goals/iui-activity-add-edit.html',
      restrict: 'E',
      controller: ActivityAddEditController,
      scope: {
        routeParams: '='
      }
    };
    return directive;
  }

  ActivityAddEditController.$inject = ['$scope', 'goals', '$location'];

  function ActivityAddEditController($scope, goals, $location) {

    var goalId      =  parseInt($scope.routeParams.goalId);
    var activityId  =  parseInt($scope.routeParams.activityId);

    var editMode    =  false;
    var original;
    var originalGoal;

    $scope.goals    =  goals;


    if (goalId) {

      $scope.goal   =  _.findWhere(goals.list, { goalId: goalId });

      if (activityId) {
        original    =  _.findWhere($scope.goal.patientActivities, {activityId: activityId });
      }

      if (original) {
        app.routing.data.title = 'Edit ' + original.activityName;
        editMode = true;
        $scope.activity = angular.copy(original);
      } else {
        $scope.activity = {};
      }

    }

    $scope.save = function() {
      if (editMode) {
        var index = $scope.goal.patientActivities.indexOf(original);
        if (index  !== -1) {
          $scope.goal.patientActivities[index] = $scope.activity;
        }
      } else {
        $scope.activity.activityId = $scope.goal.patientActivities.length + 1;
        $scope.activity.progressMilestone = 0;
        $scope.activity.goalId = $scope.goal.goalId;
        $scope.activity.completedDate = null;
        $scope.activity.statusCode = 'Active';
        $scope.goal.patientActivities.push($scope.activity);
      }
      $location.path('/goals/detail/' + $scope.activity.goalId  + '/activity/' + $scope.activity.activityId);
    };
  }

})(window.app);