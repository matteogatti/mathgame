'use strict';

describe('Controller: SubtractionCtrl', function () {

  // load the controller's module
  beforeEach(module('countdownGameApp'));

  var SubtractionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubtractionCtrl = $controller('SubtractionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SubtractionCtrl.awesomeThings.length).toBe(3);
  });
});
