(function (app) {
  'use strict';
  app.factory('physicianScheduleService', physicianScheduleService);

  physicianScheduleService.$inject = ['$location', 'uiCalendarConfig'];

  function physicianScheduleService($location, uiCalendarConfig) {
    
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var eventData = [
      [
        {
          id: 1,
          slotId: 3,
          physicianId: 34,
          title: 'Repeating Event',
          className: [],
          start: new Date(y, m, d + 4, 16, 0),
          end: new Date(y, m, d + 4, 20, 0),
          allDay: false
        },
        {
          id: 2,
          slotId: 4,
          physicianId: 34,
          title: 'Single Event',
          className: [],
          start: new Date(y, m, d + 1, 19, 0),
          end: new Date(y, m, d + 1, 22, 30),
          allDay: false
        }
      ]
    ];

    var selectedPhysician = {
      physicianId: 34,
      name: 'Dr. Joe Williams',
      speciality: 'Podiatry',
      eventData: eventData,
      calendar: null
    };


    // callbacks and settings defined below are defined in http://fullcalendar.io/docs/
    var factory = {
      goToPhysicianSchedule: goToPhysicianSchedule,
      selectedPhysician: selectedPhysician,
      getSlot: getSlot,
      updateSlot: updateSlot,
      callbacks: {
        dayClick: dayClick,
        eventClick: eventClick,
        eventDrop: eventDrop,
        eventResize: eventResize,
        viewRender: viewRender
      }
    };

    return factory;

    function getPhysicianSchedulePath(physicianId) {
      return '/physician-schedules/'+physicianId;
    }

    function dayClick(date, jsEvent, view) {
      // Triggered when the user clicks on a day.
      console.log(date, jsEvent, view);

    }

    function eventClick(event, jsEvent, view) {
      // Triggered when the user clicks an event.
      return goToSlot(event.physicianId, event.slotId);
    }

    function eventDrop(event, delta, revertFunc, jsEvent, ui, view) {
      // Triggered when dragging stops and the event has moved to a different day/time.
      console.log(event, delta, revertFunc, jsEvent, ui, view);
    }

    function eventResize(event, delta, revertFunc, jsEvent, ui, view) {
      // Triggered when resizing stops and the event has changed in duration.
      
      var slot = _.findWhere(selectedPhysician.eventData[0], {slotId: event.slotId});
      slot.end = event.end.clone().format();
      // slot.end = event.end.utc();
      console.log(slot.end);
    }

    function viewRender(view, element) {
      // Triggered when a new date-range is rendered, or when the view type switches.
      console.log(view, element);
    }

    function goToPhysicianSchedule(physicianId) {
      return $location.path(getPhysicianSchedulePath(physicianId));
    }

    function removeSlot(physician, slot) {
      var theIndex = physician.eventData[0].indexOf(slot);
      physician.eventData[0].splice(theIndex, 1);
      return physician.eventData;
    }

    function addSlot(physician, slot) {
      physician.eventData[0].push(slot);
      return physician.eventData;
    }

    function refreshUICalendar(physician) {
      var currentCal = uiCalendarConfig.calendars.physicianCalendar;
      currentCal.fullCalendar('removeEvents');
      currentCal.fullCalendar('addEventSource', physician.eventData[0]);
      return physician.eventData;
    }

    function updateSlot(physician, updatedSlot, originalSlot) {
      removeSlot(physician,originalSlot);
      addSlot(physician, updatedSlot);
      refreshUICalendar(physician);
      return goToPhysicianSchedule(physician.physicianId);
    }

    function goToSlot(physicianId, slotId) {
      return $location.path(getPhysicianSchedulePath(physicianId) + '/' + slotId);
    }

    function getSlot(physician, slotId) {
      if (!slotId ||
          !physician ||
          !physician.eventData ||
          !physician.eventData[0].length) {
        return;
      }
      return _.findWhere(physician.eventData[0], {slotId: parseInt(slotId)});
    }
  }

}(window.app));