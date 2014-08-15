'use strict';

angular.module('sf.app', ['ngRoute', 'sf.main', 'sf.product'])
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