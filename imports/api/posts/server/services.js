//file: \imports\api\posts\server

import { Meteor } from 'meteor/meteor';

import Posts from '../collection';


class PostService {

	static createPost(post){
		if(!Meteor.userId())
            throw new Meteor.Error(500, 'Error 500: Server error', "Client is not authenticated");

        Posts.insert(post);
	}

	static _getPost(_id){
		return Posts.findOne({_id: _id});
	}

	static editPost(_id, data){
		let post = this._getPost(_id);
        if(post.userId !== Meteor.userId())
            throw new Meteor.Error(500, 'Edit error', "You're not authorized to edit this post");

        Posts.update({_id: _id}, {
            $set: {
                title: data.title,
                description: data.description
            }
        });
	} 

	static deletePost(_id){
		let post = this._getPost(_id);
        if(post.userId !== Meteor.userId())
            throw new Meteor.Error(500, 'Delete error', "You're not authorized to delete this post");


        Posts.remove( _id );
	}
}

export default PostService;