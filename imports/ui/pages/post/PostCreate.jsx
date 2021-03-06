import { Meteor } from 'meteor/meteor';

import React from 'react';

import { withTracker } from 'meteor/react-meteor-data';

import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import LongTextField from 'uniforms-semantic/LongTextField';

import SimpleSchema from 'simpl-schema';

import route from '/imports/routing/router.js';

import {NavMenuRoutes} from '/imports/api/menu/routes';


class PostCreate extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            message: null
        }
    }
	
    showMessage(message){
        alert(message);
    }

    onSubmit = (data) => {
        Meteor.call('post.create', data, (err) => {
            if(err)
                this.showMessage(err.message);
            else{
                this.showMessage("Post succesfull");
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

        const PostForm = ({model}) =>
            <AutoForm schema={PostSchema}
                onSubmit={this.onSubmit}
                model={model}>
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

const PostCreateContainer = withTracker( () => {
    return {

    };
})(PostCreate);

export default PostCreateContainer;
