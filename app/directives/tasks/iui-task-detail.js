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

  TasksDetailController.$inject = ['$scope', 'tasks', '$location'];

  function TasksDetailController($scope, tasks, $location) {
    var taskId = parseInt($scope.taskId);
    $scope.tasks = tasks;
    $scope.delete = deleteTask;

    if (taskId) {
      $scope.task = _.findWhere(tasks.list, {id: taskId });
      if ($scope.task) {
        app.routing.data.title = $scope.task.name;
      }
    }

    function deleteTask() {
      var index = tasks.list.indexOf($scope.task);
      if (index > -1) {
        tasks.list.splice(index, 1);
        $location.path('/tasks/');
      }
    }
  }

})(window.app);
