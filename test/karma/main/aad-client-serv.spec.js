'use strict';

describe('module: main, service: AadClient', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var AadClient;
  beforeEach(inject(function (_AadClient_) {
    AadClient = _AadClient_;
  }));

  it('should do something', function () {
    expect(!!AadClient).toBe(true);
  });

});
