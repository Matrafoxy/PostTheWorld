import { withTracker } from 'meteor/react-meteor-data';

import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField'; 
import SubmitField from 'uniforms-semantic/SubmitField';

import React from 'react';
import { Button, Grid } from 'semantic-ui-react'

import { Link } from 'react-router-dom';

import { Meteor } from 'meteor/meteor';

import route from '/imports/routing/router.js';

import Posts from '/imports/api/posts/colection.js'

class PostList extends React.Component {
	
	editPost(_id){
		route.go('/post/edit/:_id', {_id: _id});
	}
	deletePost(_id){
		Meteor.call('post.delete', _id, function(err){
			if(err)
				console.log(err);
			else
				console.log('Delete successfull')
		});
	}

	render(){
		const {loading, posts} = this.props;

		if (loading) {
            return <div>Waiting for posts</div>
        }

        return(
        	 <div >
                {
                    posts.map(post => {
                      
	                        return <div key={post._id} style={{border: '3px solid', widith: '50%'}}>
	                        	<h3>{post.title}</h3>
	                        	<p>{post.description}</p>
	                        	<div>
	                        	{ Meteor.userId() === post.userId ?<Button onClick={this.editPost.bind(this, post._id)}> Edit </Button> : '' } 
	                        	{ Meteor.userId() === post.userId ?<Button onClick={this.deletePost.bind(this, post._id)}> Delete </Button> : '' }
	                        	</div>
                        
                        </div>
                    })
                }
            </div>
        );

	}
}

export default PostListContainer = withTracker( () => {
	const handle = Meteor.subscribe('posts');
	//console.log(Posts.find().fetch())

	return {
		loading: !handle.ready(),
		posts: Posts.find().fetch()
	};


})(PostList);