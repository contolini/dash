var React = require('react');

var Icon = React.createClass({
  propTypes: {
    type: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array
    ])
  },
  getDefaultProps: function() {
    return {
      type: 'checkmark'
    };
  },
  render: function() {
    var types = this.props.type + ' icon';
    types = this.props.disabled ? types + ' disabled' : types;
    types = this.props.className ? types + ' ' + this.props.className : types;
    var style = {};
    if (this.props.color) {
      style.color = this.props.color;
    }
    return (
      <i onClick={this.props.onClick} className={types} style={style} title={this.props.title}></i>
    );
  }
});

module.exports = Icon;
