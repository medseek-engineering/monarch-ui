(function (app) {
  'use strict';

  app.directive('editPhysicianSlot', editPhysicianSlot);

  function editPhysicianSlot() {
    var directive = {
      templateUrl: '/directives/physician-schedules/edit-physician-slot/edit-physician-slot.html',
      restrict: 'E',
      controller: EditPhysicianSlotController,
      scope: {
        physician: '=',
        slotId: '='
      }
    };
    return directive;
  }

  EditPhysicianSlotController.$inject = ['$scope', 'physicianScheduleService'];

  function EditPhysicianSlotController($scope, physicianScheduleService) {
    var slotId = parseInt($scope.slotId);
    var editMode = false;
    $scope.goToPhysicianSchedule = physicianScheduleService.goToPhysicianSchedule;
    $scope.updateSlot = physicianScheduleService.updateSlot;

    activate();

    function activate() {
      $scope.$watch('slotId', getSlot);
    }
    
    function getSlot(newVal) {
      if (!newVal) {
        return;
      }
      $scope.original = physicianScheduleService
                          .getSlot($scope.physician, $scope.slotId);
      $scope.slot = angular.copy($scope.original);
    }
    
  }

})(window.app);