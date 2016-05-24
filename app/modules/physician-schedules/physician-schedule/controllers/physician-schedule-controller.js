(function (app) {
  'use strict';
  app.controller('PhysicianScheduleController', PhysicianScheduleController);

  PhysicianScheduleController.$inject = ['physicianScheduleService', '$scope'];

  function PhysicianScheduleController(physicianScheduleService, $scope) {
    var vm = this;
    vm.calendarCallbacks = physicianScheduleService.callbacks;
    vm.goToPhysicianSchedule = physicianScheduleService.goToPhysicianSchedule;

    vm.update = function() {
      $scope.physicianCalendar.fullCalendar('refetchEvents');
    };

    activate();

    function activate() {
      vm.physician = physicianScheduleService.selectedPhysician;
      app.routing.data.title = vm.physician.name;
    }
  }


}(window.app));