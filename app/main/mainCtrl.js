'use strict';

angular.module('sf.main')
    .controller('MainCtrl', function ($scope, ProductService) {
    	$scope.products = ProductService.getProducts();
  });