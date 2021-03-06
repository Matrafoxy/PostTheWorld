import { Meteor } from 'meteor/meteor';

import React from 'react';

import PropTypes from 'prop-types';

import { withTracker } from 'meteor/react-meteor-data';

import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import LongTextField from 'uniforms-semantic/LongTextField';

import SimpleSchema from 'simpl-schema';

import route from '/imports/routing/router.js';

import {NavMenuRoutes} from '/imports/api/menu/routes';


class PostEdit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            post: null,
            message: null
        }
    }
    showMessage(message){
        alert(message);
    }

    componentDidMount(){
        Meteor.call('post.get', this.props._id, (err, result) => {
            if(err)
                this.showMessage(err.message);
            else
                this.setState({post: result});
        });

    }
    onSubmit = (data) => {

        Meteor.call('post.edit',this.props._id, data, (err) => {
            if(err)
            {
                this.showMessage(err.message);
            }
            else{
                this.showMessage('Edit successfull');
                route.go(NavMenuRoutes.POSTLIST);
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
                onSubmit={this.onSubmit}
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

PostEdit.propTypes = {
    _id: PropTypes.string,

}


const PostEditContainer = withTracker( () => {

    return {
    };


})(PostEdit);

export default PostEditContainer;