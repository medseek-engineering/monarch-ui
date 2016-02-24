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
        className: 'col-xs-6',
        hideFieldName: true
      },
      {
        displayName: 'Due',
        field: 'due',
        className: 'col-xs-6 clearfix',
        valueTemplateUrl: '/directives/tasks/task-value-template.html'
      }
    ];
  }

})(window.app);