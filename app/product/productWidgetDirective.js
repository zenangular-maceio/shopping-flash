'use strict';

angular.module('sf.product')
.directive('flProductWidget', function(){
	return{
		restrict: 'E',
		scope: {
			name: '@',
			price: '@'
		},
		templateUrl: 'product/productWidgetDirective.tpl.html'
	};
});
