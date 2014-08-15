'use strict';

angular.module('sf.product')
    .controller('ProductDetailsCtrl', function ($scope, $routeParams, ProductService) {
    	$scope.product = ProductService.getProduct($routeParams.id);
    	console.log($scope.product);
});