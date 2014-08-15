'use strict';

// service
angular.module('sf.product')
    .factory('ProductService', function () {
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
        },
        {
                id: 3,
                name: "Produto 3",
                price: 110,
                type: "Flash Pro",
                photos: ["foto1","foto2"],
                description: "Livro Angular 2"
        },
        {
                id: 4,
                name: "Produto 4",
                price: 220,
                type: "Livro",
                photos: ["foto1","foto2"],
                description: "Livro Angular 2"
        },
        {
                id: 5,
                name: "Produto 5",
                price: 1,
                type: "Livro",
                photos: ["foto1","foto2"],
                description: "Livro Angular 2"
        }


        ];

        // publico
        return {
            getProducts: function () {
                return products;
            }

        };
    });