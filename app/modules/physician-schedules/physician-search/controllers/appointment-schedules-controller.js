(function (app) {
  'use strict';
  app.controller('AppointmentSchedulesController', AppointmentSchedulesController);

  AppointmentSchedulesController.$inject = ['$scope'];

  function AppointmentSchedulesController(scope) {
    var vm = this;
    scope.field = {
      'name': 'WebPhysician',
      'placeholder': 'Enter Physician Name',
      'layout': {
        'row': 0,
        'column': 0
      },
      'filters': {
        'Required': true
      }
    };

    activate();

    function activate() {
      vm.physician = null;
    }

    scope.$on(scope.field.name + 'Selected', function(event, data) {
      vm.physician = data;
    });
  }

}(window.app));