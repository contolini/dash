var React = require( 'react' );
var UserRefluxAction = require( '../actions/userActions-reflux' );
var UserStoreReflux = require( '../stores/userStore-reflux' );

var UserItemReflux = React.createClass( {

  handleClick: function() {
    var opts = {
      orgName: 'devdesign',
      teamName: this.props.teamName,
      roleType: 'member',
      userId: this.props.userId
    }
    this._removeUser( opts );
  },
  _removeUser: function( opts ) {
    UserRefluxAction.USER_DATA( opts );
  },

  render: function() {
    return (
      <li className="user-item">
        <button className="remove-item" onClick={this.handleClick}>Remove user</button>
        <span className="user-name">{this.props.name}</span>
      </li>
    )
  }

} );

module.exports = UserItemReflux;
