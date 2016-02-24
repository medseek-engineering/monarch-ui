(function (app) {
  'use strict';
  app.value('tasks', {
    list: [
      {
        name: 'Task 1',
        id: 1,
        status: 'Open',
        type: 'Basic',
        due: '2016-01-27T06:00:00',
        assigned: ''
      },
      {
        name: 'Task 2',
        id: 2,
        status: 'Completed',
        type: 'Basic',
        due: '2016-01-26T06:00:00',
        assigned: ''
      }
    ]
  });
})(window.app);