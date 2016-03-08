(function (app) {
  'use strict';

  app.directive('iuiTaskAddEdit', taskAddEdit);

  function taskAddEdit() {
    var directive = {
      templateUrl: '/directives/tasks/iui-task-add-edit.html',
      restrict: 'E',
      controller: TasksAddEditController,
      scope: {
        taskId: '='
      }
    };
    return directive;
  }

  TasksAddEditController.$inject = ['$scope', 'tasks', '$location'];

  function TasksAddEditController($scope, tasks, $location) {
    var taskId = parseInt($scope.taskId);
    var editMode = false;
    var originalTask;

    if (taskId) {
      originalTask = _.findWhere(tasks.list, {TaskSpecificId: taskId });
      if (originalTask) {
        app.routing.data.title = 'Edit '+originalTask.name;
        editMode = true;
        $scope.task = angular.copy(originalTask);
      } else {
        $scope.task = {};
      }
    }

    $scope.save = function() {
      if (editMode) {
        var taskIndex = tasks.list.indexOf(originalTask);
        if (taskIndex  !== -1) {
          tasks.list[taskIndex] = $scope.task;
        }
      } else {
        $scope.task.id = tasks.list.length + 1;
        tasks.list.push($scope.task);
      }
      $location.path('/tasks/detail/'+$scope.task.TaskSpecificId);
    };
  }

})(window.app);