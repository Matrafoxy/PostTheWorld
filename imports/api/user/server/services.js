//file: imports\api\user\server
import { Meteor } from 'meteor/meteor';

import { Accounts } from 'meteor/accounts-base'

class UserService {

    static createUser(data){
        if(data.password !== data.confirmPassword)
            throw new Meteor.Error(500, 'Password mismatch', 'Your password and confirmation password do not match');

        if(Accounts.findUserByEmail(data.email))
            throw new Meteor.Error(500, 'Email error', 'Account with this email already exists');
        
        Accounts.createUser({
            email: data.email,
            password: data.password
        });
    }
	
}

export default UserService;