'use strict';

// service
angular.module('Services', [])
    .factory('ProductsService', function () {
        // privado
        var products = [{
                id: 1,
                name: "Produto 1",
                price: 10,
                type: "Brinquedo",
                photos: ["foto1","foto2"],
                description: "Brinquedo Angular 1"
        },
            {
                id: 2,
                name: "Produto 2",
                price: 120,
                type: "Livro",
                photos: ["foto1","foto2"],
                description: "Livro Angular 2"
        }];

        // publico
        return {
            getProducts: function () {
                return products;
            }

        };
    });