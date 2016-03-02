(function (app) {
  'use strict';

  app.directive('iuiTaskDetail', taskDetail);

  function taskDetail() {
    var directive = {
      templateUrl: '/directives/tasks/iui-task-detail.html',
      restrict: 'E',
      controller: TasksDetailController,
      scope: {
        taskId:'='
      }
    };
    return directive;
  }

  TasksDetailController.$inject = ['$scope', 'tasks'];

  function TasksDetailController($scope, tasks) {
    var taskId = parseInt($scope.taskId);
    if (taskId) {
      $scope.taskDetail = _.findWhere(tasks.list, {id: taskId });
      if ($scope.taskDetail) {
        app.routing.data.title = $scope.taskDetail.name;
      }
    }
    $scope.tasks = tasks;
  }

})(window.app);