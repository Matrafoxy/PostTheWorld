//file: \imports\api\posts
import Posts from './colection';

Posts.before.insert(function(userId, post){
    post.createdAt = Date.now();
    post.userId = userId;
})
