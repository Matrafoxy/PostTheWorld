import React from 'react';

import { Meteor } from 'meteor/meteor';

import route from '/imports/routing/router.js';

import {NavMenuRoutes} from '/imports/api/menu/routes';

class Logout extends React.Component {


    showMessage(message){
        alert(message);
    }
	
    componentDidMount(){

        Meteor.logout( (err) => {
            if(err)
                this.showMessage(err.message);
            else{
                route.go(NavMenuRoutes.HOME);
            }
        });
    }
    render(){

        return(
            <h1 >
            Logging out...
            </h1>
        )
    }
}


export default Logout;