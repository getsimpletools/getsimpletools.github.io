var module = angular.module("app", ['ngRoute']);

    module.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/simplemvc', {
                    templateUrl: 'tools/simplemvc.html',
                    controller: 'RouteController'
                }).
                when('/simplemysql', {
                    templateUrl: 'tools/simplemysql.html',
                    controller: 'RouteController'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);

module.controller("RouteController", function($scope) {

})