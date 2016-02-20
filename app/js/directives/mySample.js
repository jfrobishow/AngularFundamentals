'use strict';

eventsApp.directive('mySample', function($compile){
	return {
		//By default it's A which expects the directive to be used as an attribute. 
		//E is for element. It can also be C for class
		//M is for comment element.
		restrict: 'A', 

		//using template angular will compile it for you.
		template: '<input type="text" ng-model="sampleData" /> {{sampleData}}<br>',
		scope: {
			//provides an isolate scope.
		}

		/*link: function(scope, element, attrs, controller){
			var markup = '<input type="text" ng-model="sampleData" /> {{sampleData}}<br>';
			angular.element(element).html($compile(markup)(scope));
		} */
	};
});