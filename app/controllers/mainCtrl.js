'use strict';

angular.module('ShoppingFlash')
    .controller('MainCtrl', function($scope, ProductsService){
        $scope.products = ProductsService.getProducts();
        $scope.routeTo = function (id) {
           window.location.href = '#/product/' + id;
        }
});