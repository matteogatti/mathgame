'use strict';

/**
 * @ngdoc function
 * @name mathGameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mathGameApp
 */
angular.module('mathGameApp').controller('generalCtrl', function ($scope, $location) {

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];    

    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});