import { Mongo } from 'meteor/mongo';
import PostSchema from './schema';

import Meteor from 'meteor/meteor';

let Posts = new Mongo.Collection('posts');

Posts.attachSchema(PostSchema);

export default Posts;