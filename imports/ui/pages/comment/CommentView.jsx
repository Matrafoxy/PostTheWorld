import AutoForm from 'uniforms-semantic/AutoForm';
import SubmitField from 'uniforms-semantic/SubmitField';
import LongTextField from 'uniforms-semantic/LongTextField';


import React from 'react';

import PropTypes from 'prop-types';

import { Button, List } from 'semantic-ui-react'

import { Meteor } from 'meteor/meteor';

import SimpleSchema from 'simpl-schema';

import moment from 'moment';


class CommentView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message: null
        }
    }

    showMessage(message){
        alert(message);
    }

    deleteComment = (e, {_id}) => {
        Meteor.call('comment.remove', _id, (err) => {
            if(err)
                this.showMessage(err.message);

        });
    }

    onSubmit = (data) => {
        data.postId = this.props.postId;
        Meteor.call('comment.add', data, function(err){
            if(err)
                this.showMessage(err.message);
            else
                this.showMessage('Comment added succesffuly');
        });
    }

    render(){

        const CommentSchema = new SimpleSchema({
            text: {
                type: String
            },
           
        });

        const CommentForm = ({model}) =>
            <AutoForm
                schema={CommentSchema}
                onSubmit={this.onSubmit}
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

CommentView.propTypes = {
    postId: PropTypes.string,
    comments: PropTypes.array,
    'comments.map': PropTypes.func,
}



export default CommentView;


