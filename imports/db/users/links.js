import { Meteor } from 'meteor/meteor';

import Posts from '/imports/api/posts/collection';
import Comments from '/imports/api/comments/collection';

// Meteor.users.addLinks({
//     'posts': {
//         collection: Posts,
//         inversedBy: 'user'
//     },
//     // 'comments': {
//     // 	collection: Posts,
//     // 	inversedBy: 'comments'
//     // }
// });


// Comments.addLinks({
// 	'post': {
// 		collection: Posts,
// 		inversedBy: 'comments'
// 	}
// })