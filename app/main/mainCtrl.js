'use strict';

angular.module('sf.main')
    .controller('MainCtrl', function ($scope, $location, ProductService) {
    	$scope.products = ProductService.getProducts();
    	$scope.loadSection = function(id){
    		$location.path("/product/"+id);
    	}
  });