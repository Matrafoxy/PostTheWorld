import { Mongo } from 'meteor/mongo';
import CommentSchema from './schema';

let Comments = new Mongo.Collection('comments');

Comments.attachSchema(CommentSchema);

export default Comments;