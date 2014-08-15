'use strict';

angular.module('ShoppingFlash', ['ngRoute', 'Services','Directives'])
    .config(['$routeProvider',
    function (routeProvider) {
        routeProvider.
        when('/', {
            templateUrl: 'partials/main.html',
            controller: 'MainCtrl'
        }).
        when('/product/:id', {
            templateUrl: 'partials/productDetails.html',
            controller: 'ProductDetailsCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);
