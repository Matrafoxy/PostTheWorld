import { withTracker } from 'meteor/react-meteor-data';

import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';

import React from 'react';

import RegisterSchema from '/imports/api/user/register/schema';

import { Meteor } from 'meteor/meteor';



class Register extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            registerData: {},
        };
    }

    showMessage(message){
        alert(message);
    }

    onSubmit = (data) => {
        Meteor.call('user.register', data);

        Meteor.loginWithPassword(data.email, data.password, (err) => {
            if(err)
                this.showMessage(err.message);
        });



    }

    render(){
        const RegisterForm = ({model}) =>
            <AutoForm
                schema={RegisterSchema}
                onSubmit={this.onSubmit}
                model={model}
            >
                <h2>Register</h2>

                <TextField name="email" type="email" label="Email" />
                <TextField name="password" type="password" label="Password" />
                <TextField name="confirmPassword" type="password" label="Confirm" />

                <div className="super-special-class">
                    <SubmitField className="super-special-class-with-suffix" value="Register" />
                </div>
            </AutoForm>
        return(
            <div>
                <RegisterForm />
            </div>
        );

    }
}

const RegisterContainer = withTracker( () => {
    return {

    };


})(Register);

export default RegisterContainer;