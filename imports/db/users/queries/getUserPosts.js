import { Meteor } from 'meteor/meteor';

import Posts from '/imports/api/posts/collection';

import Comments from '/imports/api/comments/collection';


export default Meteor.users.createQuery('getUserPosts', {
	$filter({filters, options, params}) {
		filters._id = params._id;
	},
	$options: {sort: {createdAt: -1}},
	posts: {
		_id: 1,
		title: 1,
		description: 1,
		userId: 1,
		comments: {
			_id: 1,
			userId: 1,
			text: 1,
			createdAt: 1
		}

	},


});

