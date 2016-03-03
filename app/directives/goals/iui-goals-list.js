(function (app) {
  'use strict';

  app.directive('iuiGoalsList', goalsList);

  function goalsList() {
    var directive = {
      templateUrl: '/directives/goals/iui-goals-list.html',
      restrict: 'EA',
      controller: GoalsListController
    };
    return directive;
  }

  GoalsListController.$inject = ['$scope', 'goals'];

  function GoalsListController($scope, goals) {
    $scope.goals = goals;
    $scope.goalsDisplayFields = {
      active: [
        {
          displayName: 'Name',
          field: 'goalName',
          className: 'list-item-title',
          hideFieldName: true
        },
        {
          displayName: 'Due',
          field: 'dueDate',
          className: 'list-item-text',
          valueTemplateUrl: '/templates/key-value-date.html'
        }
      ],
      complete: [
        {
          displayName: 'Name',
          field: 'goalName',
          className: 'list-item-title',
          hideFieldName: true
        },
        {
          displayName: 'Completed',
          field: 'goalCompletedDate',
          className: 'list-item-text',
          valueTemplateUrl: '/templates/key-value-date.html'
        }
      ]
    };
  }

})(window.app);