import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({
	text: {
		type: String
	},
	postId: {
        type: String,
    },
	userId: {
        type: String,
        autoValue: function(){ return Meteor.userId(); }
    },
    createdAt: {
		type: Date,
		 autoValue: function() {
		 	//console.log(new Date());
		 	if ( this.isInsert ) {
		 		return new Date;
		 	}
    	}
  },

});