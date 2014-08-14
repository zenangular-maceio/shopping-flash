'use strict';

angular.module('ShoppingFlash', ['ngRoute'])
    .config(['$routeProvider',
    function (routeProvider) {
        routeProvider.
        when('/products', {
            templateUrl: 'partials/main.html',
            controller: 'MainCtrl'
        }).
        when('/products/:id', {
            templateUrl: 'partials/productDetails.html',
            controller: 'ProductDetailsCtrl'
        }).
        otherwise({
            redirectTo: '/products'
        });
}]);
