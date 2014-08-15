'use strict';

angular.module('ShoppingFlash')
    .controller('ProductDetailsCtrl', function ($scope, $routeParams) {
        console.log($routeParams.id);
});