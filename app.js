var module = angular.module("app", ['ngRoute']);

    module.config(['$routeProvider', '$locationProvider',
        function($routeProvider,$locationProvider) {
            $routeProvider.
                when('/start/simplemvc', {
                    templateUrl: 'start/simplemvc.html',
                    controller: 'RouteController'
                }).
                when('/start/simplemysql', {
                    templateUrl: 'start/simplemysql.html',
                    controller: 'RouteController'
                }).otherwise({
                    
                });

                //$locationProvider.hashPrefix('!');

                /*
                otherwise({
                    redirectTo: '/'
                });
                */

                $locationProvider.hashPrefix("#");

        }]);

module.controller("RouteController", function($scope) {

});

$(function(){

    $('body').scrollspy({
        target: '.bs-docs-sidebar',
        offset: 40
    });

});