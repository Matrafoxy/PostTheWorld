import AutoForm from 'uniforms-semantic/AutoForm';
import SubmitField from 'uniforms-semantic/SubmitField';
import LongTextField from 'uniforms-semantic/LongTextField';


import React from 'react';
import { Button, List } from 'semantic-ui-react'

import { Meteor } from 'meteor/meteor';

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
        //console.log(this.props.postId);
        // Meteor.call('comment.list', this.props.postId, (err, results) => {
        //     if(err)
        //         console.log('err: ' + err);
        //     else
        //     {
        //         //console.log(results);
        //         this.setState({comments: results});
        //     }
        // });
    }


    deleteComment = (e, {_id}) => {
        Meteor.call('comment.remove', _id, function(err){
            if(err)
                console.log(err);

        });
    }

    onSubmit(data){
        data.postId = this.props.postId;
        //console.log(this.props.postId);
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
					
                    {this.props.comments ?
                        <div>{
			
                            this.props.comments.map(comment => {
                      
	                        return <List key={comment._id}>
	                        		<List.Item>
	                        			<p>{comment.text}</p>
	                        		</List.Item>
	                        		<List.Item floated='right'>
	                        			<p>{moment(comment.createdAt).format('DD-MM-YYYY')}</p>
	                        		</List.Item>
	                        	 { Meteor.userId() === comment.userId ? (
	                        	 	<List.Item>
	                        	 		<Button onClick={this.deleteComment} _id={comment._id} > Delete </Button>
	                        	 	</List.Item>)
	                        	 	: '' }

	                        	</List>
	                        	
	                        	
                        		
                                 
                            })
                        }</div> : ''}
                </div>
            </div>

        );
			
    }
}



export default CommentView;


