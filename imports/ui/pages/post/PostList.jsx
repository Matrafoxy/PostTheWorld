import { withTracker } from 'meteor/react-meteor-data';

import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';

import React from 'react';
import { Button, Grid, Container, Segment, Divider,List } from 'semantic-ui-react'

import { Link } from 'react-router-dom';

import { Meteor } from 'meteor/meteor';

import route from '/imports/routing/router.js';

import Posts from '/imports/api/posts/collection.js'

import CommentView from '../comment/CommentView.jsx';

import {getUserPosts} from '/imports/db/queries'


class PostList extends React.Component {

    constructor(props){
        super(props);
        //console.log(this.props.panel);
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
        //console.log(userPosts);
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

export default PostListContainer = withTracker( () => {
    //const handle = Meteor.subscribe('posts');
    //console.log(Posts.find().fetch())
    const query = getUserPosts.clone({_id: Meteor.userId()});
    const handle = query.subscribe();
    //console.log(this.props);


    return {
        loading: !handle.ready(),
        userPosts: query.fetch()//Posts.find().fetch()
    };


})(PostList);