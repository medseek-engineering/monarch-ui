(function (app) {
  'use strict';
  app.factory('tasksService', tasksService);

  tasksService.$inject = ['tasks'];

  function tasksService(tasks) {

    var service = {
      getTasks: getTasks
    };

    return service;

    function cleanDates(taskList) {
      return taskList.map(function(task) {
        task.DateDue = new Date(task.DateDue);
        task.CompletedDate = new Date(task.CompletedDate);
        return task;
      });
    }

    function getTasks() {
      tasks.list = cleanDates(tasks.list);
      return tasks.list;
    }

  }
})(window.app);