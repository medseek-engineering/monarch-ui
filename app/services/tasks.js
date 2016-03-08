(function (app) {
  'use strict';
  app.value('tasks', {
    query: {
      statuses: {},
      types: {},
      completed: {},
      due: {}
    },
    statuses: [
      'Past Due',
      'Today\'s',
      'Future',
      'Waiting for Claims',
      'Missed Opportunity'
    ],
    types: [
      'Education Material',
      'Goal',
      'Activity',
      'Other Tasks',
      'Assessment'
    ],
    displayFields: {
      query: [
        {
          displayName: 'Name',
          field: 'name'
        },
        {
          displayName: 'Statuses',
          field: 'statuses',
          hideFieldName: true,
          displayFields: [
            {
              categoryName: 'Status',
              displayName: 'Past Due',
              field: 'Past Due',
              templateUrl: '/$iui-lists/iui-brick-list/category-template.html'
            },
            {
              categoryName: 'Status',
              displayName: 'Today\'s',
              field: 'Today\'s',
              templateUrl: '/$iui-lists/iui-brick-list/category-template.html'
            },
            {
              categoryName: 'Status',
              displayName: 'Future',
              field: 'Future',
              templateUrl: '/$iui-lists/iui-brick-list/category-template.html'
            },
            {
              categoryName: 'Status',
              displayName: 'Waiting for Claims',
              field: 'Waiting for Claims',
              templateUrl: '/$iui-lists/iui-brick-list/category-template.html'
            },
            {
              categoryName: 'Status',
              displayName: 'Missed Opportunity',
              field: 'Missed Opportunity',
              templateUrl: '/$iui-lists/iui-brick-list/category-template.html'
            }
          ]
        },
        {
          displayName: 'Types',
          field: 'types',
          hideFieldName: true,
          displayFields: [
            {
              categoryName: 'Type',
              displayName: 'Education Material',
              field: 'Education Material',
              templateUrl: '/$iui-lists/iui-brick-list/category-template.html'
            },
            {
              categoryName: 'Type',
              displayName: 'Goal',
              field: 'Goal',
              templateUrl: '/$iui-lists/iui-brick-list/category-template.html'
            },
            {
              categoryName: 'Type',
              displayName: 'Activity',
              field: 'Activity',
              templateUrl: '/$iui-lists/iui-brick-list/category-template.html'
            },
            {
              categoryName: 'Type',
              displayName: 'Other Tasks',
              field: 'Other Tasks',
              templateUrl: '/$iui-lists/iui-brick-list/category-template.html'
            },
            {
              categoryName: 'Type',
              displayName: 'Assessment',
              field: 'Assessment',
              templateUrl: '/$iui-lists/iui-brick-list/category-template.html'
            }
          ]
        },
        {
          displayName: 'Completed',
          field: 'completed',
          templateUrl: '/$iui-lists/iui-brick-list/date-range-template.html',
          toField: 'to',
          fromField: 'from',
          toDisplayName: 'To',
          fromDisplayName: 'From'
        },
        {
          displayName: 'Due',
          field: 'due',
          templateUrl: '/$iui-lists/iui-brick-list/date-range-template.html',
          toField: 'to',
          fromField: 'from',
          toDisplayName: 'To',
          fromDisplayName: 'From'
        }
      ],
      list: [
        {
          displayName: 'Name',
          field: 'TaskTypeName',
          className: 'list-item-title',
          valueTemplateUrl: '/templates/task-name-template.html',
          hideFieldName: true
        },
        {
          displayName: 'Due',
          field: 'DateDue',
          className: 'list-item-text',
          valueTemplateUrl: '/templates/task-list-date-value.html',
          fieldTemplateUrl: '/templates/task-list-date-key.html'
        }
      ],
      detail: [
        {
          displayName: 'Task Type',
          field: 'TaskTypeName',
          valueTemplateUrl: '/templates/task-name-template.html'
        },
        {
          displayName: 'Due',
          field: 'DateDue',
          valueTemplateUrl: '/templates/key-value-date.html'
        },
        {
          displayName: 'Completed Date',
          field: 'CompletedDate',
          valueTemplateUrl: '/templates/key-value-date.html'
        }
      ]
    },
    list: [
      {
        'Id': 0,
        'UserId': 0,
        'PatientId': 0,
        'DaysLate': 0,
        'TaskTypeName': 'Education Material',
        'DateDue': '2016-02-01',
        'Name': 'Low Salt Diet',
        'CompletedDate': null,
        'IsWaitingForClaims': false,
        'ManagedPopulationId': 0,
        'TaskSpecificId': 44496,
        'FacilityName': null,
        'AdmitDate': null,
        'AdtStatus': null,
        'LastDischargeDate': null,
        'DischargeDate': null,
        'DisChargeAdmitDate': null,
        'LastFacilityName': null,
        'DisChargeFacilityName': null,
        'NoOfDaysDischargeAndCurrent': 0,
        'NoOfDaysLastDischargeAndCurrent': 0,
        'DischargedTo': null,
        'TypeId': 7,
        'TaskCompletedCount': 0,
        'IsAdhoc': null,
        'ProgramName': 'Enrollment'
      },
      {
        'Id': 0,
        'UserId': 0,
        'PatientId': 0,
        'DaysLate': 0,
        'TaskTypeName': 'Goal',
        'DateDue': '2016-02-04',
        'Name': 'test',
        'CompletedDate': '2016-02-29T00:55:56.487',
        'IsWaitingForClaims': false,
        'ManagedPopulationId': 0,
        'TaskSpecificId': 47,
        'FacilityName': null,
        'AdmitDate': null,
        'AdtStatus': null,
        'LastDischargeDate': null,
        'DischargeDate': null,
        'DisChargeAdmitDate': null,
        'LastFacilityName': null,
        'DisChargeFacilityName': null,
        'NoOfDaysDischargeAndCurrent': 0,
        'NoOfDaysLastDischargeAndCurrent': 0,
        'DischargedTo': null,
        'TypeId': 11,
        'TaskCompletedCount': 0,
        'IsAdhoc': null,
        'ProgramName': 'Report manage population'
      },
      {
        'Id': 0,
        'UserId': 0,
        'PatientId': 0,
        'DaysLate': 0,
        'TaskTypeName': 'Activity',
        'DateDue': '2016-02-12',
        'Name': 'Coping',
        'CompletedDate': '2016-02-29T00:55:50.39',
        'IsWaitingForClaims': false,
        'ManagedPopulationId': 0,
        'TaskSpecificId': 61,
        'FacilityName': null,
        'AdmitDate': null,
        'AdtStatus': null,
        'LastDischargeDate': null,
        'DischargeDate': null,
        'DisChargeAdmitDate': null,
        'LastFacilityName': null,
        'DisChargeFacilityName': null,
        'NoOfDaysDischargeAndCurrent': 0,
        'NoOfDaysLastDischargeAndCurrent': 0,
        'DischargedTo': null,
        'TypeId': 43,
        'TaskCompletedCount': 0,
        'IsAdhoc': null,
        'ProgramName': 'Report manage population'
      },
      {
        'Id': 0,
        'UserId': 0,
        'PatientId': 0,
        'DaysLate': 0,
        'TaskTypeName': 'Other Tasks',
        'DateDue': '2016-02-11',
        'Name': null,
        'CompletedDate': '2016-02-25T00:45:47.7',
        'IsWaitingForClaims': false,
        'ManagedPopulationId': 0,
        'TaskSpecificId': 167733,
        'FacilityName': null,
        'AdmitDate': null,
        'AdtStatus': null,
        'LastDischargeDate': null,
        'DischargeDate': null,
        'DisChargeAdmitDate': null,
        'LastFacilityName': null,
        'DisChargeFacilityName': null,
        'NoOfDaysDischargeAndCurrent': 0,
        'NoOfDaysLastDischargeAndCurrent': 0,
        'DischargedTo': null,
        'TypeId': 1125,
        'TaskCompletedCount': 0,
        'IsAdhoc': null,
        'ProgramName': 'Enrollment'
      },
      {
        'Id': 0,
        'UserId': 0,
        'PatientId': 0,
        'DaysLate': 0,
        'TaskTypeName': 'Assessment',
        'DateDue': '2016-02-24T01:29:45.52',
        'Name': 'Medication Discrepancy Tool(MDT)',
        'CompletedDate': '2016-02-25T00:45:33.047',
        'IsWaitingForClaims': false,
        'ManagedPopulationId': 0,
        'TaskSpecificId': 65447,
        'FacilityName': null,
        'AdmitDate': null,
        'AdtStatus': null,
        'LastDischargeDate': null,
        'DischargeDate': null,
        'DisChargeAdmitDate': null,
        'LastFacilityName': null,
        'DisChargeFacilityName': null,
        'NoOfDaysDischargeAndCurrent': 0,
        'NoOfDaysLastDischargeAndCurrent': 0,
        'DischargedTo': null,
        'TypeId': 230,
        'TaskCompletedCount': 0,
        'IsAdhoc': null,
        'ProgramName': 'Asthma CCD'
      },
      {
        'Id': 0,
        'UserId': 0,
        'PatientId': 0,
        'DaysLate': 0,
        'TaskTypeName': 'Assessment',
        'DateDue': '2016-02-13',
        'Name': 'CHF Initial Assessment',
        'CompletedDate': '2016-02-11T22:56:25.34',
        'IsWaitingForClaims': false,
        'ManagedPopulationId': 0,
        'TaskSpecificId': 65486,
        'FacilityName': null,
        'AdmitDate': null,
        'AdtStatus': null,
        'LastDischargeDate': null,
        'DischargeDate': null,
        'DisChargeAdmitDate': null,
        'LastFacilityName': null,
        'DisChargeFacilityName': null,
        'NoOfDaysDischargeAndCurrent': 0,
        'NoOfDaysLastDischargeAndCurrent': 0,
        'DischargedTo': null,
        'TypeId': 187,
        'TaskCompletedCount': 0,
        'IsAdhoc': null,
        'ProgramName': 'Report manage population'
      },
      {
        'Id': 0,
        'UserId': 0,
        'PatientId': 0,
        'DaysLate': 0,
        'TaskTypeName': 'Assessment',
        'DateDue': '2016-02-12',
        'Name': 'Consent Assessment',
        'CompletedDate': '2016-02-11T22:55:49.91',
        'IsWaitingForClaims': false,
        'ManagedPopulationId': 0,
        'TaskSpecificId': 65485,
        'FacilityName': null,
        'AdmitDate': null,
        'AdtStatus': null,
        'LastDischargeDate': null,
        'DischargeDate': null,
        'DisChargeAdmitDate': null,
        'LastFacilityName': null,
        'DisChargeFacilityName': null,
        'NoOfDaysDischargeAndCurrent': 0,
        'NoOfDaysLastDischargeAndCurrent': 0,
        'DischargedTo': null,
        'TypeId': 172,
        'TaskCompletedCount': 0,
        'IsAdhoc': null,
        'ProgramName': 'Report manage population'
      },
      {
        'Id': 0,
        'UserId': 0,
        'PatientId': 0,
        'DaysLate': 0,
        'TaskTypeName': 'Other Tasks',
        'DateDue': '2016-02-19',
        'Name': null,
        'CompletedDate': '2016-02-11T21:58:55.09',
        'IsWaitingForClaims': false,
        'ManagedPopulationId': 0,
        'TaskSpecificId': 167848,
        'FacilityName': null,
        'AdmitDate': null,
        'AdtStatus': null,
        'LastDischargeDate': null,
        'DischargeDate': null,
        'DisChargeAdmitDate': null,
        'LastFacilityName': null,
        'DisChargeFacilityName': null,
        'NoOfDaysDischargeAndCurrent': 0,
        'NoOfDaysLastDischargeAndCurrent': 0,
        'DischargedTo': null,
        'TypeId': 39,
        'TaskCompletedCount': 0,
        'IsAdhoc': null,
        'ProgramName': 'Asthma CCD'
      },
      {
        'Id': 0,
        'UserId': 0,
        'PatientId': 0,
        'DaysLate': 0,
        'TaskTypeName': 'Assessment',
        'DateDue': '2016-02-23T01:29:45.52',
        'Name': 'CCM General Assessment',
        'CompletedDate': '2016-02-09T02:54:49.98',
        'IsWaitingForClaims': false,
        'ManagedPopulationId': 0,
        'TaskSpecificId': 65461,
        'FacilityName': null,
        'AdmitDate': null,
        'AdtStatus': null,
        'LastDischargeDate': null,
        'DischargeDate': null,
        'DisChargeAdmitDate': null,
        'LastFacilityName': null,
        'DisChargeFacilityName': null,
        'NoOfDaysDischargeAndCurrent': 0,
        'NoOfDaysLastDischargeAndCurrent': 0,
        'DischargedTo': null,
        'TypeId': 256,
        'TaskCompletedCount': 0,
        'IsAdhoc': null,
        'ProgramName': 'Asthma CCD'
      },
      {
        'Id': 0,
        'UserId': 0,
        'PatientId': 0,
        'DaysLate': 0,
        'TaskTypeName': 'Assessment',
        'DateDue': '2016-02-16T01:29:45.52',
        'Name': 'CCM General Assessment',
        'CompletedDate': '2016-02-09T02:44:19.62',
        'IsWaitingForClaims': false,
        'ManagedPopulationId': 0,
        'TaskSpecificId': 65448,
        'FacilityName': null,
        'AdmitDate': null,
        'AdtStatus': null,
        'LastDischargeDate': null,
        'DischargeDate': null,
        'DisChargeAdmitDate': null,
        'LastFacilityName': null,
        'DisChargeFacilityName': null,
        'NoOfDaysDischargeAndCurrent': 0,
        'NoOfDaysLastDischargeAndCurrent': 0,
        'DischargedTo': null,
        'TypeId': 256,
        'TaskCompletedCount': 0,
        'IsAdhoc': null,
        'ProgramName': 'Asthma CCD'
      },
      {
        'Id': 0,
        'UserId': 0,
        'PatientId': 0,
        'DaysLate': 0,
        'TaskTypeName': 'Activity',
        'DateDue': '2016-02-03',
        'Name': 'Exercise',
        'CompletedDate': '2016-02-02T22:28:09.377',
        'IsWaitingForClaims': false,
        'ManagedPopulationId': 0,
        'TaskSpecificId': 43,
        'FacilityName': null,
        'AdmitDate': null,
        'AdtStatus': null,
        'LastDischargeDate': null,
        'DischargeDate': null,
        'DisChargeAdmitDate': null,
        'LastFacilityName': null,
        'DisChargeFacilityName': null,
        'NoOfDaysDischargeAndCurrent': 0,
        'NoOfDaysLastDischargeAndCurrent': 0,
        'DischargedTo': null,
        'TypeId': 9,
        'TaskCompletedCount': 0,
        'IsAdhoc': null,
        'ProgramName': 'Enrollment'
      },
      {
        'Id': 0,
        'UserId': 0,
        'PatientId': 0,
        'DaysLate': 0,
        'TaskTypeName': 'Goal',
        'DateDue': '2016-02-03',
        'Name': 'Test Goal',
        'CompletedDate': '2016-02-02T22:28:09.267',
        'IsWaitingForClaims': false,
        'ManagedPopulationId': 0,
        'TaskSpecificId': 46,
        'FacilityName': null,
        'AdmitDate': null,
        'AdtStatus': null,
        'LastDischargeDate': null,
        'DischargeDate': null,
        'DisChargeAdmitDate': null,
        'LastFacilityName': null,
        'DisChargeFacilityName': null,
        'NoOfDaysDischargeAndCurrent': 0,
        'NoOfDaysLastDischargeAndCurrent': 0,
        'DischargedTo': null,
        'TypeId': 10,
        'TaskCompletedCount': 0,
        'IsAdhoc': null,
        'ProgramName': 'Enrollment'
      },
      {
        'Id': 0,
        'UserId': 0,
        'PatientId': 0,
        'DaysLate': 0,
        'TaskTypeName': 'Education Material',
        'DateDue': '2016-02-01T07:53:39.777',
        'Name': 'Exercise: Key to Good Health',
        'CompletedDate': '2016-02-02T22:26:01.103',
        'IsWaitingForClaims': false,
        'ManagedPopulationId': 0,
        'TaskSpecificId': 44497,
        'FacilityName': null,
        'AdmitDate': null,
        'AdtStatus': null,
        'LastDischargeDate': null,
        'DischargeDate': null,
        'DisChargeAdmitDate': null,
        'LastFacilityName': null,
        'DisChargeFacilityName': null,
        'NoOfDaysDischargeAndCurrent': 0,
        'NoOfDaysLastDischargeAndCurrent': 0,
        'DischargedTo': null,
        'TypeId': 8,
        'TaskCompletedCount': 0,
        'IsAdhoc': null,
        'ProgramName': 'Enrollment'
      },
      {
        'Id': 0,
        'UserId': 0,
        'PatientId': 0,
        'DaysLate': 0,
        'TaskTypeName': 'Assessment',
        'DateDue': '2016-02-03',
        'Name': '90 Day Risk Reassessment',
        'CompletedDate': '2016-02-02T21:38:12.487',
        'IsWaitingForClaims': false,
        'ManagedPopulationId': 0,
        'TaskSpecificId': 65326,
        'FacilityName': null,
        'AdmitDate': null,
        'AdtStatus': null,
        'LastDischargeDate': null,
        'DischargeDate': null,
        'DisChargeAdmitDate': null,
        'LastFacilityName': null,
        'DisChargeFacilityName': null,
        'NoOfDaysDischargeAndCurrent': 0,
        'NoOfDaysLastDischargeAndCurrent': 0,
        'DischargedTo': null,
        'TypeId': 181,
        'TaskCompletedCount': 0,
        'IsAdhoc': null,
        'ProgramName': 'Enrollment'
      },
      {
        'Id': 0,
        'UserId': 0,
        'PatientId': 0,
        'DaysLate': 0,
        'TaskTypeName': 'Other Tasks',
        'DateDue': '2016-02-03',
        'Name': null,
        'CompletedDate': '2016-02-02T21:35:42.883',
        'IsWaitingForClaims': false,
        'ManagedPopulationId': 0,
        'TaskSpecificId': 167743,
        'FacilityName': null,
        'AdmitDate': null,
        'AdtStatus': null,
        'LastDischargeDate': null,
        'DischargeDate': null,
        'DisChargeAdmitDate': null,
        'LastFacilityName': null,
        'DisChargeFacilityName': null,
        'NoOfDaysDischargeAndCurrent': 0,
        'NoOfDaysLastDischargeAndCurrent': 0,
        'DischargedTo': null,
        'TypeId': 1126,
        'TaskCompletedCount': 0,
        'IsAdhoc': null,
        'ProgramName': 'Enrollment'
      }
    ]
  });
})(window.app);