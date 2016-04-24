'use strict';

describe('Directive: math', function () {

  // load the directive's module
  beforeEach(module('countdownGameApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<math></math>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the math directive');
  }));
});
