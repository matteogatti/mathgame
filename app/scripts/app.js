'use strict';

/**
 * @ngdoc overview
 * @name mathGameApp
 * @description
 * # mathGameApp
 *
 * Main module of the application.
 */
angular
    .module('mathGameApp', [
        'ngAnimate',
        'ngMessages',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/default', {
                templateUrl: 'views/default.html',
                controller: 'defaultCtrl'
            })
            .when('/increasing', {
                templateUrl: 'views/increasing.html',
                controller: 'increasingCtrl',
                controllerAs: 'increasing'
            })
            .when('/decreasing', {
                templateUrl: 'views/decreasing.html',
                controller: 'decreasingCtrl',
                controllerAs: 'decreasing'
            })
            .otherwise({
                redirectTo: '/default'
            });
    });
