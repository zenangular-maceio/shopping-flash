'use strict';

angular.module('ShoppingFlash')
    .controller('MainCtrl', function($scope, $location, ProductsService){
        $scope.products = ProductsService.getProducts();
        $scope.routeTo = function (id) {
           $location.path('/product/' + id);
        }
});