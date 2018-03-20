import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({
	title: {
		type: String
	},
	description: {
		type: String
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
  updatedAt: {
  	type: Date,
  	autoValue: function(){
  		if(  this.isUpdate || this.isInsert) {
  			return new Date;
  		}
  	}
  },
	userId: {
        type: String,
        autoValue: function(){ return Meteor.userId(); }
    }

});
