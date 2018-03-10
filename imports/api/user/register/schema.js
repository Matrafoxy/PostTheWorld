import SimpleSchema from 'simpl-schema';

const RegisterSchema = new SimpleSchema({
	email: {
		type: String,
	},
	
	password: {
		type: String,
		label: "Enter a password",
		min: 6
	},

	confirmPassword: {
		type: String,
		label: "Enter the password again",
		min: 6
	}

});
export default RegisterSchema;