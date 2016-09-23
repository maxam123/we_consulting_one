'use strict';

describe('module: main, service: PromiseFactory', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var PromiseFactory;
  beforeEach(inject(function (_PromiseFactory_) {
    PromiseFactory = _PromiseFactory_;
  }));

  it('should do something', function () {
    expect(!!PromiseFactory).toBe(true);
  });

});
