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

	onSubmit(data){
		//this.setState({ registerData: data });
		console.log(data);
		Meteor.call('user.register', data);
		//console.log(Meteor.user());
		Meteor.loginWithPassword(data.email, data.password, function(err){
			if(err)
				console.log(err);

		});
		//console.log(Meteor.userId());


	}

	render(){
		const SimpleForm = ({schema, onSubmit, model = {}}) => (
		    <AutoForm
		        schema={schema}
		        onSubmit={onSubmit}
		        model={model}
		    />
		);

		const RegisterForm = ({model}) =>
	    <AutoForm schema={RegisterSchema} onSubmit={doc => this.onSubmit(doc)} model={model}>
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

export default RegisterContainer = withTracker( () => {
	return {

	};


})(Register);