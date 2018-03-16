import { Meteor } from 'meteor/meteor';

import React from 'react';

import { withTracker } from 'meteor/react-meteor-data';

import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField'; 
import SubmitField from 'uniforms-semantic/SubmitField';
import LongTextField from 'uniforms-semantic/LongTextField';

import SimpleSchema from 'simpl-schema';


class PostCreate extends React.Component {
	
	onSubmit(data){
		Meteor.call('post.create', data, function(err){
			if(err)
				console.log(err);
			else
				console.log("Post succesfull")
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

			const PostForm = ({model}) =>
			    <AutoForm schema={PostSchema} onSubmit={doc => this.onSubmit(doc)} model={model}>
			        <h2>Post</h2>

			        <TextField name="title" type="text" label="Title" />
			        <div style={{display: "block"}}>
			        <LongTextField name="description" type="text" label="Description" />
			        </div>
			        <div className="super-special-class">
			            <SubmitField className="super-special-class-with-suffix" value="Post" />
			        </div>
			    </AutoForm>
			

			return(
				<div>
				<PostForm />
				</div>
			);
			}
}

export default PostCreateContainer = withTracker( () => {
	return {

	};


})(PostCreate);
