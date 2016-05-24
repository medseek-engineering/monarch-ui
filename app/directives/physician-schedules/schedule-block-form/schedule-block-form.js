(function (app) {
  'use strict';

  app.directive('scheduleBlockForm', scheduleBlockForm);

  function scheduleBlockForm() {
    var directive = {
      templateUrl: '/directives/physician-schedules/schedule-block-form/schedule-block-form.html',
      restrict: 'E',
      controller: ScheduleBlockFormController,
      scope: {
        slot: '='
      }
    };
    return directive;
  }

  ScheduleBlockFormController.$inject = ['$scope'];

  function ScheduleBlockFormController($scope) {

    $scope.opened = false;

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = !$scope.opened;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    
  }

})(window.app);