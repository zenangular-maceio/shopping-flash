'use strict';
// service
angular.module('sf.product')
    .factory('ProductService', function () {
        // privado
        var products = [{
                id: 1,
                name: "Produto A",
                price: 10,
                type: "Brinquedo",
                photos: ["foto1.jpg","foto2.jpg"],
                description: "Brinquedo Angular 1"
        },
            {
                id: 2,
                name: "Produto B",
                price: 120,
                type: "Livro",
                photos: ["foto1.jpg","foto2.jpg"],
                description: "Livro Angular 2"
        },
        {
                id: 3,
                name: "Produto C",
                price: 110,
                type: "Flash Pro",
                photos: ["foto1.jpg","foto2.jpg"],
                description: "Livro Angular 2"
        },
        {
                id: 4,
                name: "Produto D",
                price: 220,
                type: "Livro",
                photos: ["foto1.jpg","foto2.jpg"],
                description: "Livro Angular 2"
        },
        {
                id: 5,
                name: "Produto E",
                price: 1,
                type: "Livro",
                photos: ["foto1.jpg","foto2.jpg"],
                description: "Livro Angular 2"
        }


        ];

        // publico
        return {
            getProducts: function () {
                return products;
            },
            getProduct: function(id){
                var i = 0;
                for(i=0;i<products.length;i++){
                    if(products[i].id == id) 
                        return products[i];
                }
                return null;
            }

        };
    });