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
    $scope.taskDisplayFields = [
      {
        displayName: 'Name',
        field: 'name',
        className: 'list-item-title',
        hideFieldName: true
      },
      {
        displayName: 'Due',
        field: 'due',
        className: 'list-item-text',
        valueTemplateUrl: '/directives/tasks/task-value-template.html'
      }
    ];
  }

})(window.app);