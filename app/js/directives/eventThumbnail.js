'use strict';

eventsApp.directive('eventThumbnail', function($compile){
	return {
		restrict: 'E', 
		replace: true, //replaces the element making for valid html.
		templateUrl: '/templates/directives/eventThumbnail.html',
		scope: { //isolate scope dont inherit from the parent scope. Pass in the event from the template.
			//event: "=event" 
			event: "=" //if the attr has the same name, = only works.
		}
	};
});


           