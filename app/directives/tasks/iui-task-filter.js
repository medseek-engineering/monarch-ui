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

    $scope.searchTasks = function(query) {
      $location.path('/tasks/detail/'+$scope.task.id);
    };

  }

})(window.app);