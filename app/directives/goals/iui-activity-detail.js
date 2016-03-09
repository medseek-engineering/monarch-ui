(function (app) {
  'use strict';

  app.directive('iuiActivityDetail', activityDetail);

  function activityDetail() {
    var directive = {
      templateUrl: '/directives/goals/iui-activity-detail.html',
      restrict: 'E',
      controller: ActivityDetailController,
      scope: {
        goalId:'=',
        activityId: '='
      }
    };
    return directive;
  }

  ActivityDetailController.$inject = ['$scope', 'goals', '$location'];

  function ActivityDetailController($scope, goals, $location) {
    var goalId      = parseInt($scope.goalId);
    var activityId  = parseInt($scope.activityId);

    $scope.goals = goals;
    $scope.delete = deleteActivity;
    $scope.complete = completeActivity;

    if (goalId && activityId) {
      $scope.goal = _.findWhere(goals.list, {goalId: goalId });
      $scope.activity = _.findWhere($scope.goal.patientActivities, {activityId: activityId });
      if ($scope.activity) {
        app.routing.data.title = $scope.activity.activityName;
        app.routing.data.breadcrumb = [
          {
            name: 'Goals',
            url: '/goals/'
          },
          {
            name: $scope.goal.goalName,
            url: '/goals/detail/'+$scope.activity.goalId+'/'
          }
        ];
      } else {
        $location.path('/goals/detail/'+$scope.activity.goalId+'/');
      }
    } else {
      $location.path('/goals/');
    }

    function deleteActivity(activity) {
      var index = $scope.goal.patientActivities.indexOf(activity);
      if (index > -1) {
        $scope.goal.patientActivities.splice(index, 1);
        $location.path('/goals/detail/'+activity.goalId+'/');
      }
    }

    function completeActivity(activity) {
      activity.progressMilestone = 100;
      activity.completedDate = new Date();
      activity.statusCode = 'Completed';
    }
  }

})(window.app);
