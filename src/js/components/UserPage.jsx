var React = require('react');
var Button = require('./Button.jsx');
var UserActions = require('../actions/UserActions.js');

var TeamList = require('./TeamList.jsx');
var _ = require('lodash');

var UserPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  handleClick: function(e){
    UserActions.userData({
      id: this.context.router.getCurrentParams().userId,
      data: {publicKeys: [{name: 'moirai', key: this.state.newPublicKey}]}
    });
  },
  handleUserAction: function(e){
    UserActions.userData({
      id: this.context.router.getCurrentParams().userId,
      data: {publicKeys: [{name: 'moirai', key: this.state.newPublicKey}]}
    });
  },
  getInitialState: function(){
    return {
      newPublicKey: ''
    }
  },
  componentWillMount: function(){
    var userId = this.context.router.getCurrentParams().userId;
    var user = this.props.users.get(userId);

  },
  handleChange: function(event){
    this.setState({newPublicKey: event.target.value})
  },
  render: function(){
    var userActions = '';
    var userId = this.context.router.getCurrentParams().userId;
    var user = this.props.users.get(userId);
    var userTeams = user.getTeams();
    var username = user.get('data').username;
    var publicKeys = user.get('data').publicKeys
    var publicKey = _.findWhere(publicKeys, {name: 'moirai'})
    publicKey = (publicKey) ? <p class="public-key">{publicKey.key}</p> : '';
    var AddPubKey = '';
    user.isEnabled = false;
    var label = (user.isEnabled) ? 'Disable' : 'Enable';
    if (this.props.loggedInUser.id == userId) {
      AddPubKey = (
        <div>
          <h3>Update key:</h3>
          <textarea rows="4" columns="3" onChange={this.handleChange}>
          </textarea>
          <Button type={!this.state.newPublicKey.length ? 'disabled' : ''} label='Update public key'
                  onClick={this.handleClick} disabled={!this.state.newPublicKey.length} className="action-btn"/>
        </div>)
    }
    else {
      userActions = (
        <Button type={'default'} label={label} onclick={this.handleUserAction} className="action-btn"/>
      )
    }


    return (
      <div className="userPage">
        <h1>{username} {userActions}</h1>

        <h2>Teams</h2>

        <div className="teams-page">
          <TeamList teams={userTeams} canRemove={false}/>
        </div>

        <h2>Public Key</h2>
        {publicKey}
        {AddPubKey}
      </div>
    );
  }
});
module.exports = UserPage;
