jest.dontMock('backbone');
jest.dontMock('../Classes/Store');
jest.dontMock('../Classes/LoggedInStore');
var LoggedInStore = require('../Classes/LoggedInStore');

describe('LoggedInStore', function() {
  it('should get logged in user', function() {
    spyOn(LoggedInStore.prototype, 'fetch');
    var result = new LoggedInStore();
    expect(result.fetch).toHaveBeenCalled();
  });
});
