import { withTracker } from 'meteor/react-meteor-data';

import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';

import React from 'react';

import LoginSchema from '/imports/api/user/login/schema';

import { Meteor } from 'meteor/meteor';

import route from '/imports/routing/router.js';

import {NavMenuRoutes} from '/imports/api/menu/routes';


class Login extends React.Component {

    onSubmit = (data) => {
        Meteor.loginWithPassword(data.email, data.password, function(err){
            if(err)
                Meteor.Error("Login error", err);
            else{
                console.log('Login succesfull');
                route.go(NavMenuRoutes.HOME);
            }

        });
    }

    render(){
        const LoginForm = ({model}) =>
            <AutoForm schema={LoginSchema}
                onSubmit={this.onSubmit}
                model={model}>
                <h2>Login</h2>

                <TextField name="email" type="email" label="Email" />
                <TextField name="password" type="password" label="Password" />

                <div className="super-special-class">
                    <SubmitField className="super-special-class-with-suffix" value="Login" />
                </div>
            </AutoForm>
        return(
            <div>
                <LoginForm />
            </div>
        );

    }
}

const LoginContainer = withTracker( () => {
    return {

    };


})(Login);

export default LoginContainer;