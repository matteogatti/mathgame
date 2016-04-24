'use strict';

/**
 * @ngdoc function
 * @name mathGameApp.controller:AdditionCtrl
 * @description
 * # AdditionCtrl
 * Controller of the mathGameApp
 */
angular.module('mathGameApp')
    .controller('additionCtrl', function ($scope, $http) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $http.get('/funny/cartoon.json').success(function (data) {
            var random = Math.floor((Math.random() * data.length) + 0);
            $scope.cartoon = data[random];
        });

    });
