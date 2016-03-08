(function (app) {
  'use strict';
  app.value('goals', {
    displayFields: {
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
    },
    active: [
      {
        'goalId': 91,
        'goalName': 'good-test',
        'dueDate': '2016-03-04T00:00:00',
        'statusCode': 'Active',
        'goalCompletedDate': null,
        'patientActivities': [
          {
            'activityId': 97,
            'activityName': 'Exercise',
            'activityTypeId': 9,
            'description': 'be good',
            'dueDate': '2016-03-03T00:00:00',
            'progressMilestone': 28,
            'goalId': 91,
            'statusCode': 'Active',
            'completedDate': null
          }
        ]
      },
      {
        'goalId': 93,
        'goalName': 'good-test 2',
        'dueDate': '2016-04-04T00:00:00',
        'statusCode': 'Active',
        'goalCompletedDate': null,
        'patientActivities': [
          {
            'activityId': 97,
            'activityName': 'Exercise',
            'activityTypeId': 9,
            'description': 'be good',
            'dueDate': '2016-03-31T00:00:00',
            'progressMilestone': 28,
            'goalId': 93,
            'statusCode': 'Active',
            'completedDate': null
          }
        ]
      },
      {
        'goalId': 94,
        'goalName': 'good-test 3',
        'dueDate': '2016-05-20T00:00:00',
        'statusCode': 'Active',
        'goalCompletedDate': null,
        'patientActivities': [
          {
            'activityId': 97,
            'activityName': 'Exercise',
            'activityTypeId': 9,
            'description': 'be good',
            'dueDate': '2016-03-03T00:00:00',
            'progressMilestone': 28,
            'goalId': 94,
            'statusCode': 'Active',
            'completedDate': null
          }
        ]
      },
      {
        'goalId': 95,
        'goalName': 'good-test 4',
        'dueDate': '2016-06-14T00:00:00',
        'statusCode': 'Active',
        'goalCompletedDate': null,
        'patientActivities': [
          {
            'activityId': 97,
            'activityName': 'Exercise',
            'activityTypeId': 9,
            'description': 'be good',
            'dueDate': '2016-03-03T00:00:00',
            'progressMilestone': 28,
            'goalId': 95,
            'statusCode': 'Active',
            'completedDate': null
          }
        ]
      }
    ],
    complete: [
      {
        'goalId': 92,
        'goalName': 'be cool',
        'dueDate': '2016-03-09T00:00:00',
        'statusCode': 'Completed',
        'goalCompletedDate': '2016-03-03T08:32:22.353',
        'patientActivities': [
          {
            'activityId': 98,
            'activityName': 'Coping',
            'activityTypeId': 43,
            'description': 'learn to cope',
            'dueDate': '2016-03-08T00:00:00',
            'progressMilestone': 100,
            'goalId': 92,
            'statusCode': 'Completed',
            'completedDate': '2016-03-03T08:32:05.227'
          }
        ]
      }
    ]
  });
})(window.app);