jest.dontMock('../user-test.jsx');


var React, UserTest, TestUtils, asset, resourceName, resources;
describe('Individual asset item', function() {
  beforeEach(function() {
    React = require('react/addons');
    UserTest = require('../user-test.jsx');
    TestUtils = React.addons.TestUtils;
  });
  it('should render ', function() {

    var canRemove = true;

    var userItem = TestUtils.renderIntoDocument(
      <UserTest canRemove={canRemove} teamName={"foo"} userId={'123'} name={'gh'} />
    );
    var canRemoveElement = userItem.getDOMNode().childNodes[0];
    expect(canRemoveElement.className).toBe('remove-item')
    expect(userItem.getDOMNode().className).toEqual('user-item');
  });

  xit('should not display remove icon', function() {

    var canRemove = false;

    var assetItem = TestUtils.renderIntoDocument(
      <UserTest asset={asset} canRemove={canRemove} teamName={"foo"} resourceId={'123'} resourceName={'gh'}/>
    );
    var removeAsset = assetItem.getDOMNode().childNodes[0];
    expect(removeAsset.className).toBe('')
  });
});