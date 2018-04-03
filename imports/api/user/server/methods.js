// /imports/api/user/methods.js
import { Meteor } from 'meteor/meteor';

import UserService from './services';

Meteor.methods({
    'user.register': function(data){
        UserService.createUser(data);
    }
});