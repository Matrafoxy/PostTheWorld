import { Meteor } from 'meteor/meteor';

import { Accounts } from 'meteor/accounts-base';

import Posts from '../colection';

Meteor.methods({
	'post.create'(post){
		if(!Meteor.userId())
			throw new Meteor.Error(500, 'Error 500: Server error', "Client is not authenticated");
		Posts.insert(post);
			

	}
})