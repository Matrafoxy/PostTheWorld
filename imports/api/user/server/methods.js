// /imports/api/user/methods.js
import { Meteor } from 'meteor/meteor';

import { Accounts } from 'meteor/accounts-base'


Meteor.methods({
	'user.register': function(data){
		if(data.password !== data.confirmPassword)
			 throw new Meteor.Error(500, 'Password mismatch', 'Your password and confirmation password do not match');

		if(Accounts.findUserByEmail(data.email))
			 throw new Meteor.Error(500, 'Email error', 'Account with this email already exists');
		//console.log(Meteor.users.find({}).fetch())
		Accounts.createUser({
	        email: data.email,
	        password: data.password
    	});
	}

});