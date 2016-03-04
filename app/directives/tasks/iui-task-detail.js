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
    $scope.complete = completeTask;

    if (taskId) {
      $scope.task = _.findWhere(tasks.list, {TaskSpecificId: taskId });
      if ($scope.task) {
        app.routing.data.title = $scope.task.TaskTypeName;
      }
    }

    function deleteTask(task) {
      var index = tasks.list.indexOf(task);
      if (index > -1) {
        tasks.list.splice(index, 1);
        $location.path('/tasks/');
      }
    }

    function completeTask(task) {
      task.CompletedDate = new Date();
    }
  }

})(window.app);
