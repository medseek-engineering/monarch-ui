(function (app) {
  'use strict';
  app.value('tasks', {
    list: [
      {
        name: 'Task 1',
        id: 1
      },
      {
        name: 'Task 2',
        id: 2
      }
    ]
  });
})(window.app);