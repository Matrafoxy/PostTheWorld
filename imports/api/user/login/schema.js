import SimpleSchema from 'simpl-schema';

const LoginSchema = new SimpleSchema({
	email: {
		type: String,
	},
	
	password: {
		type: String,
		label: "Enter a password",
		min: 6
	}

});
export default LoginSchema;