import SimpleSchema from 'simpl-schema';

import { Meteor } from 'meteor/meteor';

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
            if ( this.isInsert ) {
                return new Date;
            }
        }
    },
    updatedAt: {
        type: Date,
        autoValue: function(){
            if ( this.isUpdate || this.isInsert ) {
                return new Date;
            }
        }
    },
    userId: {
        type: String,
        autoValue: function(){ return Meteor.userId(); }
    }
});
