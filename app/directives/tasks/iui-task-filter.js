(function (app) {
  'use strict';

  app.directive('iuiTaskFilter', taskFilter);

  function taskFilter() {
    var directive = {
      templateUrl: '/directives/tasks/iui-task-filter.html',
      restrict: 'E',
      controller: TasksFilterController,
      scope: {
        taskId: '='
      }
    };
    return directive;
  }

  TasksFilterController.$inject = ['$scope', 'tasks', '$location'];

  function TasksFilterController($scope, tasks, $location) {

    $scope.tasks = tasks;

    $scope.searchTasks = function(query) {
      $location.path('/tasks/');
    };

  }

})(window.app);