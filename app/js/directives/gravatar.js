'use strict';

eventsApp.directive('gravatar', function(gravatarUrlBuilder){
	return {
		restrict: 'E', 
		replace: true, 
		template: '<img />',
		link: function(scope, element, attrs, controller){
			attrs.$observe('email', function(newVal, oldVal){
				if(newVal !== !oldVal){
					attrs.$set('src', gravatarUrlBuilder.buildGravatarUrl(newVal));
				}
			})
		}
	};
});


           