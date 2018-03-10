import { withTracker } from 'meteor/react-meteor-data';

import AutoForm from 'uniforms-semantic/AutoForm';

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
		Meteor.call('user.register', data)


	}

	render(){
		const SimpleForm = ({schema, onSubmit, model = {}}) => (
		    <AutoForm
		        schema={schema}
		        onSubmit={onSubmit}
		        model={model}
		    />
		);
		return(
			<div>
			<SimpleForm
				schema={RegisterSchema}
				onSubmit={this.onSubmit.bind(this)}
			/>
			</div>
		);

	}
}

export default RegisterContainer = withTracker( () => {
	return {

	};


})(Register);