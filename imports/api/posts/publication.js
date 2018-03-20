//file /imports/api/posts/publications.js
import { Meteor } from 'meteor/meteor';
import Posts from '/imports/api/posts/colection';

Meteor.publish('posts', function () {
    return Posts.find({}, {sort: {createdAt: -1}}); //{}, {sort: {createdAt: -1}}
})