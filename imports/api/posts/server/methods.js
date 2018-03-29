import { Meteor } from 'meteor/meteor';

import PostService from './services';

Meteor.methods({
    'post.create'(post){
        PostService.createPost(post);
    },
    'post.get'(_id){
        return PostService._getPost(_id);
    },
    'post.edit'(_id, data){
       PostService.editPost(_id, data);
    },
    'post.delete'(_id){
       PostService.deletePost(_id);
    }
})