'use strict';

eventsApp.controller('MainMenuController',
    function MainMenuController($scope, $location) {

        console.log($location); //contains lot of info on current url.
        console.log($location.path()); 
        //search() and hash() are getter/setters.
        $scope.createEvent = function(){
            $location.replace(); //replace current page, switch the view without navigating to another page doesnt add to browser history.
            $location.url('/newEvent');
        };
    });
