(function (app) {
  'use strict';
  app.factory('tasksService', tasksService);

  tasksService.$inject = ['tasks'];

  function tasksService(tasks) {

    var service = {
      getTasks: getTasks
    };

    return service;

    function getTasks() {
      return tasks.list;
    }

  }
})(window.app);