import { withTracker } from 'meteor/react-meteor-data';

import React from 'react';

import PropTypes from 'prop-types';

import { Button, Grid, Divider,List } from 'semantic-ui-react'

import { Meteor } from 'meteor/meteor';

import route from '/imports/routing/router.js';

import CommentView from '../comment/CommentView.jsx';

import {getUserPosts} from '/imports/db/queries'


class PostList extends React.Component {

    constructor(props){
        super(props);

    }
	
    editPost = (e, {_id}) => {
        route.go('/post/edit/:_id', {_id: _id});
    }
    deletePost = (e, {_id}) => {
        Meteor.call('post.delete', _id, function(err){
            if(err)
                console.log(err);
            else
                console.log('Delete successfull')
        });
    }

    render(){
        const {loading, userPosts} = this.props;
       

        if (loading) {
            return <div>Waiting for posts</div>
        }
        let posts = [];
        if(userPosts[0])
            posts = userPosts[0].posts ;
        
        


        return(
            
            <Grid centered>
                <Grid.Column textAlign={'center'} width={10}>
                    {
                        posts.map(post => {
                      
                            return <List key={post._id} >
                                <h3>{post.title}</h3>
                                <p>{post.description}</p>
                                
                                { Meteor.userId() === post.userId ?<Button onClick={this.editPost} _id={post._id} > Edit </Button> : '' }
                                { Meteor.userId() === post.userId ?<Button onClick={this.deletePost} _id={post._id} > Delete </Button> : '' }

                                <CommentView comments={post.comments} postId={post._id} />
                                <Divider horizontal >.</Divider>
                            </List>
                        })
                    }
                </Grid.Column>
            </Grid>
        
        );

    }
}

PostList.propTypes = {
    loading: PropTypes.bool,
    userPosts: PropTypes.array
}

export default PostListContainer = withTracker( () => {

    const query = getUserPosts.clone({_id: Meteor.userId()});
    const handle = query.subscribe();

    return {
        loading: !handle.ready(),
        userPosts: query.fetch()
    };


})(PostList);