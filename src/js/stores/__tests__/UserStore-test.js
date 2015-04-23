jest.dontMock('backbone');
jest.dontMock('../Classes/Store');
jest.dontMock('../Classes/UserStore');
var UserStore = require('../Classes/UserStore');

describe('UserStore', function() {
  it('should get all users', function() {
    spyOn(UserStore.prototype, 'fetch');
    var result = new UserStore();
    expect(result.fetch).toHaveBeenCalled();
  });
});
