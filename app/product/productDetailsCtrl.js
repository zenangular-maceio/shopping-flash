'use strict';

angular.module('sf.product')
    .controller('ProductDetailsCtrl', function ($scope, $routeParams) {
        console.log($routeParams.id);
});