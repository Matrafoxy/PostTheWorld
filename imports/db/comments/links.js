import { Meteor } from 'meteor/meteor';

import Posts from '/imports/api/posts/collection';

import Comments from '/imports/api/comments/collection';


Comments.addLinks({
    'post': {
        type: 'one',
        collection: Posts,
        field: 'postId'

    },
    'user': {
        type: 'one',
        collection: Meteor.users,
        field: 'userId'
    }
});