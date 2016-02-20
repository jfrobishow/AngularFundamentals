'use strict';

eventsApp.directive('upvote', function(){
	return {
		restrict: 'E', 
		templateUrl: '/templates/directives/upvote.html',
		scope: {
			upvote: "&", //& - pass in a function within the scope of the parent scope like a pointer.
			downvote: "&",
			count: "=" //= is just an object. @sign is a string.
		}
	};
});


           