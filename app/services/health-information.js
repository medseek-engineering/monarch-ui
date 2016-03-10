(function (app) {
  'use strict';

  var healthInformation = {
    settings: {
      longitudinalView: {
        dataKeyProperty: 'Key'
      }
    },
    displayFields: [
      {
        key: 'weights',
        metricProperties: ['weight'],
        type: 'trend',
        recordsProperty: 'Records'
      },
      {
        key: 'bloodPressures',
        metricProperties: ['systolic', 'diastolic'],
        type: 'trend',
        recordsProperty: 'Records'
      },
      {
        key: 'medications',
        type: 'event',
        recordsProperty: 'Records'
      },
      {
        key: 'encounter',
        type: 'event',
        recordsProperty: 'Records'
      },
      {
        key: 'tasks',
        type: 'event',
        recordsProperty: 'Records'
      }
    ],
    data: [
      {
        Key: 'weights',
        Records: [
          {
            'date': '2014-12-31T15:55:17',
            'bmi': 22.24,
            'weight': 120
          },
          {
            'date': '2016-01-06T15:55:17',
            'bmi': 22.24,
            'weight': 155
          },
          {
            'date': '2016-01-07T15:55:17',
            'bmi': 22.24,
            'weight': 200
          },
          {
            'date': '2016-01-09T15:55:17',
            'bmi': 22.24,
            'weight': 200
          },
          {
            'date': '2016-01-11T15:55:17',
            'bmi': 22.24,
            'weight': 195
          }
        ]
      },
      {
        Key: 'bloodPressures',
        Records: [
          {
            'id': '791',
            'date': '2016-01-06T18:10:39',
            'pulse': '120',
            'systolic': 130,
            'diastolic': 110
          },
          {
            'id': '828',
            'date': '2016-01-07T15:56:15',
            'pulse': '120',
            'systolic': 125,
            'diastolic': 110
          },
          {
            'id': '1195',
            'date': '2016-01-08T13:50:50',
            'pulse': '88',
            'systolic': 117,
            'diastolic': 76
          },
          {
            'id': '198',
            'systolic': 120,
            'diastolic': 70,
            'pulse': '72',
            'date': '2016-01-09T09:53:00'
          },
          {
            'id': '198',
            'systolic': 104,
            'diastolic': 70,
            'pulse': '72',
            'date': '2016-01-10T09:53:00'
          },
          {
            'id': '198',
            'systolic': 140,
            'diastolic': 90,
            'pulse': '72',
            'date': '2016-01-11T09:53:00'
          },
          {
            'id': '198',
            'systolic': 170,
            'diastolic': 120,
            'pulse': '72',
            'date': '2016-01-12T09:53:00'
          },
          {
            'id': '198',
            'systolic': 195,
            'diastolic': 140,
            'pulse': '72',
            'date': '2016-01-13T09:53:00'
          }
        ]
      },
      {
        Key: 'medications',
        Records: [
          {
            'date': '2016-01-05T19:55:17'
          },
          {
            'date': '2016-01-07T05:55:17'
          },
          {
            'date': '2016-01-08T20:55:17'
          },
          {
            'date': '2016-01-10T04:55:17'
          },
          {
            'date': '2016-01-11T09:55:17'
          },
          {
            'date': '2016-01-12T18:55:17'
          }
        ]
      },
      {
        Key: 'encounter',
        Records: [
          {
            'date': '2016-01-05T15:55:17'
          },
          {
            'date': '2016-01-07T15:55:17'
          },
          {
            'date': '2016-01-08T15:55:17'
          },
          {
            'date': '2016-01-10T15:55:17'
          },
          {
            'date': '2016-01-11T15:55:17'
          },
          {
            'date': '2016-01-12T15:55:17'
          }
        ]
      },
      {
        Key: 'tasks',
        Records: [
          {
            'date': '2016-01-09T09:55:17'
          },
          {
            'date': '2016-01-08T19:55:17'
          },
          {
            'date': '2016-01-12T15:55:17'
          }
        ]
      }
    ]
  };

  app.value('healthInformation', healthInformation);

})(window.app);