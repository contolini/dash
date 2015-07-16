var Reflux = require('reflux');
var UserConstants = require('../constants/UserConstants');
var common = require('../utils/common');
var _ = require('lodash');


var UserRefluxAction = Reflux.createActions(['USER_DATA']);

module.exports = UserRefluxAction;
