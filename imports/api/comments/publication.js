//file /imports/api/comments/publication.js
import { Meteor } from 'meteor/meteor';
import Comments from '/imports/api/comments/collection';

Meteor.publish('comments', function () {
    return Comments.find({}, {sort: {createdAt: -1}}); //{}, {sort: {createdAt: -1}}
})