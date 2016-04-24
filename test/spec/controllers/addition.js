'use strict';

describe('Controller: AdditionCtrl', function () {

  // load the controller's module
  beforeEach(module('countdownGameApp'));

  var AdditionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdditionCtrl = $controller('AdditionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdditionCtrl.awesomeThings.length).toBe(3);
  });
});
