'use strict';

eventsApp.controller('EventListController',
    function EventListController($scope, $location, eventData) {
        $scope.events = eventData.getAllEvents();
    }
);