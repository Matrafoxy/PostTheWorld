import { Meteor } from 'meteor/meteor';

import Comments from './collection';


class CommentService {

    static _getComments(postId){
        let comments =  Comments.find({postId}).fetch();
        console.log(comments);

        return comments;
    }

    static createComment(data){
        if(!Meteor.userId())
            throw new Meteor.Error(500, 'Error 500: Server error', "Client is not authenticated");
        Comments.insert(data);
    }

    static deleteComment(_id){
        let comment  = Comments.findOne(_id);
        if(Meteor.userId() !== comment.userId)
            throw new Meteor.Error(500, 'Delete error', "You're not authorized to delete this comment");

        Comments.remove(_id);
    }
}

export default CommentService;