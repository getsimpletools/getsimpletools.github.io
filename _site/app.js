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
    $scope.$on('$viewContentLoaded', function(){
        
        Prism.highlightAll();

        setTimeout(function(){
            $('[data-spy="scroll"]').each(function () {
                var $spy = $(this).scrollspy('refresh')
            });

            $('.bs-docs-sidebar').affix({offset:{top:160}});
        },100);
       
        
    });
});

$(function(){


/*
 setTimeout(function(){
    if($('.bs-docs-sidebar').length)
    {
        $('body').scrollspy({
            target: '.bs-docs-sidebar'
        });

        $('.bs-docs-sidebar').data('spyloaded',1);
    }
},1000);
*/

});