//file: \imports\db\posts
import { Meteor } from 'meteor/meteor';

import Posts from '/imports/api/posts/collection';
import Comments from '/imports/api/comments/collection';

Posts.addLinks({
    'user': {
        type: 'one',
        collection: Meteor.users,
        field: 'userId'
    },

    'comments': {
        collection: Comments,
        inversedBy: 'post'
    }
});

