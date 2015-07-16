var React = require('react');
var Button = require('./Button.jsx');
var UserActions = require('../actions/UserActions.js');
var _ = require('lodash');

var UserPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  handleClick: function( e ) {
    UserActions.userData({
      id: this.context.router.getCurrentParams().userId,
      data: {publicKeys: [{name: 'moirai', key: this.state.newPublicKey}]}
    });
  },
  getInitialState: function() {
    return {
      newPublicKey: ''
    }
  },
  handleChange: function( event ) {
    this.setState({newPublicKey: event.target.value})
  },
  render: function() {
    var userId = this.context.router.getCurrentParams().userId;
    var user = this.props.users.get(userId);
    var username = user.get('data').username;
    var publicKeys = user.get('data').publicKeys
    var publicKey = _.findWhere(publicKeys, {name: 'moirai'})
    publicKey = (publicKey) ? <p>{publicKey.key}</p> : '';
    var AddPubKey = '';
    if (this.props.loggedInUser.id == userId) {
      AddPubKey = (

        <div>
          <h2>Public Key</h2>
          <h3>Update key:</h3>
          <textarea rows = "4" columns = "3" onChange = {this.handleChange}>
          </textarea>
          <Button type={!this.state.newPublicKey.length ? 'disabled' : ''} label='Update public key' onClick={this.handleClick} disabled={!this.state.newPublicKey.length} />
        </div>)
    }


    return (
      <div className="userPage">
        <h1>{username}</h1>

        {publicKey}
        {AddPubKey}
      </div>
    );
  }
});
module.exports = UserPage;
