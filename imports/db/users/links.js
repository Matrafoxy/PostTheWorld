import { Meteor } from 'meteor/meteor';

import Posts from '/imports/api/posts/collection';
import Comments from '/imports/api/comments/collection';


Meteor.users.addLinks({
    'posts': {
        collection: Posts,
        inversedBy: 'user'
    },

    'comments': {
        collection: Comments,
        inversedBy: 'user'
    }
});

