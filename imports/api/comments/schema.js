import SimpleSchema from 'simpl-schema';

import { Meteor } from 'meteor/meteor';

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
            if ( this.isInsert ) {
                return new Date;
            }
        }
    },
});