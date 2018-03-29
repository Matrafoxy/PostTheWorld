import { Meteor } from 'meteor/meteor';

import Posts from '../collection';

Meteor.methods({
    'post.create'(post){
        if(!Meteor.userId())
            throw new Meteor.Error(500, 'Error 500: Server error', "Client is not authenticated");
        Posts.insert(post);
			
    },
    'post.get'(id){
        return Posts.findOne({_id: id})
    },
    'post.edit'(_id, data){
        let post = Meteor.call('post.get',_id);
        if(post.userId !== Meteor.userId())
            throw new Meteor.Error(500, 'Edit error', "You're not authorized to edit this post");

        Posts.update({_id: _id}, {
            $set: {
                title: data.title,
                description: data.description
            }
        });
    },
    'post.delete'(_id){
        let post = Meteor.call('post.get',_id);
		
        if(post.userId !== Meteor.userId())
            throw new Meteor.Error(500, 'Delete error', "You're not authorized to delete this post");


        Posts.remove( _id );
    }
})