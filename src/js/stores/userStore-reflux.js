var Reflux = require( 'reflux' );
var resources = require( '../utils/resources' );
var common = require( '../utils/common' );
var userAction = require( '../actions/userActions-reflux' )

var UserStoreReflux = Reflux.createStore( {
  //model: User,
  //url: resources.routes.ALL_USERS
  users: {},
  init: function() {
    var that = this
    common.getAllUsers().done( function( data ) {
      that.users = data;
    } );
    this.listenTo( userAction.USER_DATA, this.getUserData )
  },

  getUserData: function( action ) {
    var that = this;
    console.log('action passed:', action )
    //common.userData( action ).done( function( newUserData ) {
    //  console.log( newUserData, 'action passed:', action )
    //} );
  }


} );

module.exports = UserStoreReflux;
