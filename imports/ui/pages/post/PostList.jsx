import { withTracker } from 'meteor/react-meteor-data';

import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField'; 
import SubmitField from 'uniforms-semantic/SubmitField';

import React from 'react';


import { Meteor } from 'meteor/meteor';

import route from '/imports/routing/router.js';

import Posts from '/imports/api/posts/colection.js'

class PostList extends React.Component {
	

	render(){
		const {loading, posts} = this.props;

		//if (loading) {
        //    return <div>Waiting for posts</div>
       // }

        return(
        	 <div>
                {
                    posts.map(post => {
                        return <div key={post._id}>
                        	<h5>{post.title}</h5>
                        	<h6>{post.description}</h6>
                        </div>
                    })
                }
            </div>
        );

	}
}

export default PostListContainer = withTracker( () => {
	const handle = Meteor.subscribe('posts');
	console.log(Posts.find().fetch())

	return {
		loading: !handle.ready(),
		posts: Posts.find().fetch()
	};


})(PostList);