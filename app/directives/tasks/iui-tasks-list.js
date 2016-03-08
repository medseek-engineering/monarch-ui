(function (app) {
  'use strict';

  app.directive('iuiTasksList', tasksList);

  function tasksList() {
    var directive = {
      templateUrl: '/directives/tasks/iui-tasks-list.html',
      restrict: 'EA',
      controller: TasksListController
    };
    return directive;
  }

  TasksListController.$inject = ['$scope', 'tasks'];

  function TasksListController($scope, tasks) {
    $scope.tasks = tasks;
  }

})(window.app);