import { withTracker } from 'meteor/react-meteor-data';

import React from 'react';
import { Menu } from 'semantic-ui-react'


import { Meteor } from 'meteor/meteor';

import route from '/imports/routing/router.js';

import {NavMenuRoutes} from '/imports/api/menu/routes';

class NavBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            activeItem: 'home'
        }
    }
	
    handleItemClick(name){
			
        this.setState({ activeItem: name });
			
        route.go(name);
    }


    render(){

        const { activeItem } = this.state;

        return(
            <Menu inverted>
			 <Menu.Item
			 	 name={ NavMenuRoutes.HOME }
			 	 active={ activeItem === NavMenuRoutes.HOME }
			 	 onClick={() => this.handleItemClick(NavMenuRoutes.HOME)}
			 	 />
	       
	        <Menu.Item
	        	name={ NavMenuRoutes.POSTLIST }
	        	active={ activeItem === NavMenuRoutes.POSTLIST }
	        	onClick={() => this.handleItemClick(NavMenuRoutes.POSTLIST)}
	        	/>

	        { !Meteor.userId() ?
	        	<Menu.Menu>
	        	<Menu.Item
	           		name={ NavMenuRoutes.LOGIN }
	           		active={ activeItem === NavMenuRoutes.LOGIN }
	           		onClick={() => this.handleItemClick(NavMenuRoutes.LOGIN)} 
	           		/>
	           	<Menu.Item
	           		name={ NavMenuRoutes.REGISTER }
	           		active={ activeItem === NavMenuRoutes.REGISTER }
	           		onClick={() => this.handleItemClick(NavMenuRoutes.REGISTER)} 
	           		/>
	        </Menu.Menu>
	        :

	        <Menu.Menu position='right'>
	          <Menu.Item
	          	name={ NavMenuRoutes.POSTCREATE }
	          	active={ activeItem ===  NavMenuRoutes.POSTCREATE }
	          	onClick={() => this.handleItemClick(NavMenuRoutes.POSTCREATE)}
	          	/>
	          
	          <Menu.Item
	          	name={ NavMenuRoutes.LOGOUT }
	          	active={ activeItem ===  NavMenuRoutes.LOGIN }
	          	onClick={() => this.handleItemClick(NavMenuRoutes.LOGOUT)}
	          	/>
	        </Menu.Menu>
	        }
	      </Menu>
	      );
    }
}

export default NavBar;