import { Meteor } from 'meteor/meteor';

import CommentService from './services';


Meteor.methods({
    'comment.list'(postId){

        let comments = CommentService._getComments(postId);
        //console.log(comments);
        return comments;
    },
	
    'comment.add'(data){
        CommentService.createComment(data);
    },

    'comment.remove'(_id){
        CommentService.deleteComment(_id);
    }
});