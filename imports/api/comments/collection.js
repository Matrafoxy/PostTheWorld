import { Mongo } from 'meteor/mongo';
import CommentSchema from './schema';

import Meteor from 'meteor/meteor';

let Comments = new Mongo.Collection('comments');

Comments.attachSchema(CommentSchema);

export default Comments;