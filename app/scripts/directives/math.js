'use strict';

/**
 * @ngdoc directive
 * @name mathGameApp.directive:math
 * @description
 * # math
 */
angular.module('mathGameApp')
    .directive('math', function ($parse, $timeout) {
        return {
            scope: {
                imageResult: '=method'
            },
            link: function postLink(scope, element, attrs) {
                var type = '';
                var operations = [];

                switch (attrs.type) {
                    case 'addition':
                        type = 'ADDIZIONI';
                        scope.note = false;
                        break;
                    case 'subtraction':
                        type = 'SOTTRAZIONI';
                        scope.note = true;
                        break;
                }

                /** generate 10 random number from 0 to 10 */
                function randomNumber() {
                    return Math.floor((Math.random() * 11) + 0);
                }

                for (var i = 0; i < 10; i++) {
                    var n1 = randomNumber();
                    var n2 = randomNumber();

                    if (attrs.type == 'addition') {
                        operations.push({
                            string: n1 + ' + ' + n2,
                            result: parseInt(n1) + parseInt(n2)
                        })
                    }

                    if (attrs.type == 'subtraction') {
                        var op = parseInt(n1) - parseInt(n2);
                        var result = op < 0 ? 'no' : op;

                        operations.push({
                            string: n1 + ' - ' + n2,
                            result: result
                        })
                    }
                }

                scope.imageResult = true;
                scope.type = type;
                scope.operations = operations;

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

                    if (allResultElements.length === 10) {
                        scope.imageResult = false;
                    }
                }
            },
            templateUrl: 'scripts/directives/partials/math.html'
        };
    });
