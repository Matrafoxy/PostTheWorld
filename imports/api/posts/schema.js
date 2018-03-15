import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({
	title: {
		type: String
	},
	description: {
		type: String
	},
	createdAt: {
		type: Date
	},
	userId: {
        type: String,
    }

});
