(function (app) {
  'use strict';

  app.directive('iuiTaskForm', taskForm);

  function taskForm() {
    var directive = {
      templateUrl: '/directives/tasks/iui-task-form.html',
      restrict: 'E',
      controller: TasksFormController,
      scope: {
        task:'='
      }
    };
    return directive;
  }

  TasksFormController.$inject = ['$scope', 'tasks'];

  function TasksFormController($scope, tasks) {
    if ($scope.task && $scope.task.name) {
      app.routing.data.title = $scope.task.name;
    }
    $scope.taskDisplayFields = tasks.fields;
  }

})(window.app);