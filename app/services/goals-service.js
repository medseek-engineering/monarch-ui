(function (app) {
  'use strict';

  var progressBarOptions = {
    maxValue: 100,
    hideDisplayName: true
  };

  var progressBarDisplayFields = [
    {
      field: 'progressMilestone',
      className: 'list-item-title',
      displayName: 'Progress'
    }
  ];

  app.value('goals', {
    activityTypes: [
      {
        activityName: 'Exercise',
        activityTypeId: 9
      },
      {
        activityName: 'Coping',
        activityTypeId: 43
      }
    ],
    barOptions: progressBarOptions,
    displayFields: {
      progressBar: progressBarDisplayFields,
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
      ],
      activityList: [
        {
          displayName: 'Name',
          field: 'activityName',
          className: 'list-item-title',
          hideFieldName: true
        },
        {
          displayName: 'progress',
          field: 'progressMilestone',
          className: 'list-item-progress-bar',
          hideFieldName: true,
          valueTemplateUrl: '/templates/progress-bar-row.html',
          barDisplayFields: progressBarDisplayFields,
          barOptions: progressBarOptions

        },
        {
          displayName: 'Due',
          field: 'dueDate',
          className: 'list-item-text',
          valueTemplateUrl: '/templates/key-value-date.html'
        }

      ],
      activityDetail: {
        active: [
          {
            displayName: 'Due',
            field: 'dueDate',
            valueTemplateUrl: '/templates/key-value-date.html'
          },
          {
            displayName: 'Status',
            field: 'statusCode'
          }
        ],
        complete: [
          {
            displayName: 'Due',
            field: 'dueDate',
            valueTemplateUrl: '/templates/key-value-date.html'
          },
          {
            displayName: 'Status',
            field: 'statusCode'
          },
          {
            displayName: 'Completed',
            field: 'completedDate',
            valueTemplateUrl: '/templates/key-value-date.html'
          }
        ]
      }
    },
    list: [
      {
        'goalId': 91,
        'goalName': 'good-test',
        'dueDate': '2016-03-04T00:00:00',
        'statusCode': 'Active',
        'goalCompletedDate': null,
        'patientActivities': [
          {
            'activityId': 96,
            'activityName': 'Exercise',
            'activityTypeId': 9,
            'description': 'be good',
            'dueDate': '2016-03-03T00:00:00',
            'progressMilestone': 0,
            'goalId': 91,
            'statusCode': 'Active',
            'completedDate': null
          },
          {
            'activityId': 97,
            'activityName': 'Exercise',
            'activityTypeId': 9,
            'description': 'be good',
            'dueDate': '2016-03-03T00:00:00',
            'progressMilestone': 25,
            'goalId': 91,
            'statusCode': 'Active',
            'completedDate': null
          },
          {
            'activityId': 98,
            'activityName': 'Exercise',
            'activityTypeId': 9,
            'description': 'be good',
            'dueDate': '2016-03-03T00:00:00',
            'progressMilestone': 50,
            'goalId': 91,
            'statusCode': 'Active',
            'completedDate': null
          },
          {
            'activityId': 99,
            'activityName': 'Exercise',
            'activityTypeId': 9,
            'description': 'be good',
            'dueDate': '2016-03-03T00:00:00',
            'progressMilestone': 75,
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
      },
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