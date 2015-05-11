var React = require('react');
var CurrentUserInfo = require('./CurrentUserInfo.jsx');
var Icon = require('./Icon.jsx');
var Link = require('react-router').Link;

var Header = React.createClass({

  render: function() {
    var loggedInUser = this.props.loggedInUser;
    return (
      <nav className="ui menu inverted navbar page grid">
          <h1><Link to="Home" className="brand item">DevDash</Link></h1>
          <div className="right menu">
              <div className="item"><CurrentUserInfo loggedInUser={loggedInUser} /></div>
          </div>
      </nav>
    );
  }

});

module.exports = Header;
