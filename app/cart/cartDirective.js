'use strict';

angular.module('sf.cart')
    .directive('sfCart', function () {
        return {
            restrict: 'E',
            scope: {
                who: '@'
            },
            template: '<h1>CART</h1>'
        };
    });