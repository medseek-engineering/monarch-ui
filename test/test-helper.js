
window.app = {
  root: '/',
  currentRoute: '',
  api: {
    root: '/api/'
  }
};

/* ensure karma is working */
describe('test framework', function() {
  'use strict';
  it('passes for positive tests', function() {
    expect(1).toEqual(1);
  });
  it('passes for negative tests', function() {
    expect(function() {
      throw new Error();
    }).toThrow();
  });
});
