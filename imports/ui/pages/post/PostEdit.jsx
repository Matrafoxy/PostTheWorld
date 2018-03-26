import { Meteor } from 'meteor/meteor';

import React from 'react';

import { withTracker } from 'meteor/react-meteor-data';

import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField'; 
import SubmitField from 'uniforms-semantic/SubmitField';
import LongTextField from 'uniforms-semantic/LongTextField';

import SimpleSchema from 'simpl-schema';

import { Button, Grid } from 'semantic-ui-react'

import route from '/imports/routing/router.js';

import {NavMenuEnum, NavMenuRoutes} from '/imports/api/menu/routes';


class PostEdit extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			post: null,
		}
	}
	

	componentDidMount(){
		console.log(this.props._id);

		Meteor.call('post.get', this.props._id, (err, result) => {
			if(err)
				console.log(err);
			else
				this.setState({post: result});
		});

	}
	onSubmit(data){

		Meteor.call('post.edit',this.props._id, data, function(err){
			if(err)
				console.log(err);
			else{
				console.log('Edit successfull');
				route.go(NavMenuRoutes[NavMenuEnum.POSTS]);
				}
		});
	}

	render(){

		const PostSchema = new SimpleSchema({
				title: {
					type: String
				},
				description: {
					type: String
				}

			});


		const PostForm = () =>
			    <AutoForm 
			    schema={PostSchema} 
			    onSubmit={doc => this.onSubmit(doc)} 
			    model={this.state.post}
			    
			     >
			        <h2>Post</h2>
			     
				        <div>
				        	<TextField name="title" type="text" />
				      	</div>

					    <div style={{display: "block"}}>
					        <LongTextField name="description" type="text" />
					    </div>
					  
					        <div className="super-special-class">
					            <SubmitField className="super-special-class-with-suffix" value="Save" />
					        </div>
				
			    </AutoForm>
			

			return(
				<div>
				<PostForm />
				</div>
			);

	}
}

export default PostEditContainer = withTracker( () => {
	const handle = Meteor.subscribe('posts');

	return {
		};


})(PostEdit);