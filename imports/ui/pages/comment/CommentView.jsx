import { withTracker } from 'meteor/react-meteor-data';

import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField'; 
import SubmitField from 'uniforms-semantic/SubmitField';
import LongTextField from 'uniforms-semantic/LongTextField';


import React from 'react';
import { Button, Grid, List, Segment, Divider } from 'semantic-ui-react'

import { Link } from 'react-router-dom';

import { Meteor } from 'meteor/meteor';

import route from '/imports/routing/router.js';

import Comments from '/imports/api/comments/collection.js'

import SimpleSchema from 'simpl-schema';

import moment from 'moment';


class CommentView extends React.Component {
		constructor(props){
			super(props);
			this.state = {
			comments: null
			}
		}


		componentDidMount(){
			Meteor.call('comment.list', this.props.postId, (err, results) => {
			if(err)
				console.log('err: ' + err);
			else
			{
				console.log(results);
				this.setState({comments: results});
			}
		});
		}


	deleteComment(_id){
		Meteor.call('comment.remove', _id, function(err){
			if(err)
				console.log(err);

		});
	}


	onSubmit(data){
		data.postId = this.props.postId;
		console.log(this.props.postId);
		Meteor.call('comment.add', data, function(err){
			if(err)
				console.log(err);
			else
				console.log('Comment added succesffuly');
		});
	}

	render(){

		

		 const CommentSchema = new SimpleSchema({
			text: {
					type: String
				}

				});

		const CommentForm = ({model}) =>
			    <AutoForm 
			    schema={CommentSchema} 
			    onSubmit={doc => this.onSubmit(doc)} 
			    model={model}
			     >
				<div style={{display: "block"}}>
					 <LongTextField name="text" type="text" />
				</div>
					  
				<div className="super-special-class">
					<SubmitField className="super-special-class-with-suffix" value="Add Comment" />
				</div>
				
			    </AutoForm>

		return(
				<div>
					<div>
						<CommentForm />
					</div>

					<div>
					
					{this.state.comments ?
					<div>{
			
                    this.state.comments.map(comment => {
                      
	                        return <List key={comment._id}>
	                        		<List.Item>
	                        			<p>{comment.text}</p>
	                        		</List.Item>
	                        		<List.Item floated='right'>
	                        			<p>{moment(comment.createdAt).format('DD-MM-YYYY')}</p>
	                        		</List.Item>	
	                        	</List>
	                        	
	                        	{ Meteor.userId() === comment.userId ?<Button onClick={this.deleteComment.bind(this, comment._id)}> Delete </Button> : '' }
	                        	
                        
                                 
                    })
                }</div> : ''}
				</div>
			</div>

			);
			
	}
}



export default CommentView;


