import { withTracker } from 'meteor/react-meteor-data';

import React from 'react';

import { Meteor } from 'meteor/meteor';

import route from '/imports/routing/router.js';

import {NavMenuEnum, NavMenuRoutes} from '/imports/api/menu/routes';

class Logout extends React.Component {
	
	componentDidMount(){

    	Meteor.logout(function(err){
    		if(err)
    			console.log(err);
    		else
    			route.go(NavMenuRoutes[NavMenuEnum.HOME]);
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