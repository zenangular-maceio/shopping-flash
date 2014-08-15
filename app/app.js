'use strict';

angular.module('ShoppingFlash', []);


angular.module('ShoppingFlash', ['ngRoute'])
    .config(['$routeProvider',
    function (routeProvider) {
            routeProvider.
            when('/', {
                templateUrl: 'main/main.html',
                controller: 'MainCtrl'
            }).
            when('/product/:id', {
                templateUrl: 'product/productDetails.html',
                controller: 'ProductDetailsCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
}]);