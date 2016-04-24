'use strict';

/**
 * @ngdoc function
 * @name mathGameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mathGameApp
 */
angular.module('mathGameApp').directive('xcreasing', function ($parse, $timeout) {
    return {
        scope: {
            imageResult: '=method'
        },
        link: function(scope, element, attrs, controllers) {
            scope.imageResult = true;

            var type = '';
            var numbersArray = [];
            var numbersArraySorted = [];

            switch (attrs.type) {
                case 'increasing':
                    type = 'CRESCENTE';
                    break;
                case 'decreasing':
                    type = 'DECRESCENTE';
                    break
            }

            /** math type */
            scope.type = type;

            /** check if a number is in array */
            var contains = function(needle) {
                var findNaN = needle !== needle;
                var indexOf;

                if(!findNaN && typeof Array.prototype.indexOf === 'function') {
                    indexOf = Array.prototype.indexOf;
                } else {
                    indexOf = function(needle) {
                        var i = -1, index = -1;

                        for(i = 0; i < this.length; i++) {
                            var item = this[i];

                            if((findNaN && item !== item) || item === needle) {
                                index = i;
                                break;
                            }
                        }

                        return index;
                    };
                }

                return indexOf.call(this, needle) > -1;
            };

            /** integer sort */
            function sortNumber(a,b) {
                return attrs.type == 'decreasing' ? b - a : a - b;
            }

            /** generate 10 random numer from 0 to 20 */
            for (var i = 0; i < 12; i++) {
                var number = Math.floor((Math.random() * 21) + 0);

                contains.call(numbersArray, number) ? i-- : numbersArray.push(number);
            }

            angular.copy(numbersArray, numbersArraySorted);

            scope.numbers = numbersArray;
            scope.sortedNumbers = numbersArraySorted.sort(sortNumber);

            scope.checkResult = function(index, result) {
                var selector = '#result-' + index;

                var icon = 'iconResult' + index;
                var model = $parse(icon);
                var iconResult = (result === angular.element(document.querySelector(selector)).val()) ? true : false;

                model.assign(scope, iconResult);
                $timeout(function() {
                    finalResult();
                }, 1500);

            };

            function finalResult() {
                var allResultElements = angular.element('i[class*="glyphicon-thumbs-up"]');

                if (allResultElements.length === 12) {
                    scope.imageResult = false;
                }
            }
        },
        templateUrl: 'scripts/directives/partials/xcreasing.html'
    };
});