'use strict';

angular.module('sf.product')
.directive('flProductWidget', function(){
	return{
		restrict: 'E',
		scope: {
			name: '@',
			price: '@'
		},
		template: '<h3>{{name}}  {{price | currency}}</h3>'
	};
});
