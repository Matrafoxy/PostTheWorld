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
	
    handleItemClick = (e, {name}) => {
			
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
			 	 onClick={this.handleItemClick}
			 	 />
	       
	        <Menu.Item
	        	name={ NavMenuRoutes.POSTLIST }
	        	active={ activeItem === NavMenuRoutes.POSTLIST }
	        	onClick={this.handleItemClick}
	        	/>

	        { !Meteor.userId() ?
	        	<Menu.Menu>
	        	<Menu.Item
	           		name={ NavMenuRoutes.LOGIN }
	           		active={ activeItem === NavMenuRoutes.LOGIN }
	           		onClick={this.handleItemClick}
	           		/>
	           	<Menu.Item
	           		name={ NavMenuRoutes.REGISTER }
	           		active={ activeItem === NavMenuRoutes.REGISTER }
	           		onClick={this.handleItemClick}
	           		/>
	        </Menu.Menu>
	        :

	        <Menu.Menu position='right'>
	          <Menu.Item
	          	name={ NavMenuRoutes.POSTCREATE }
	          	active={ activeItem ===  NavMenuRoutes.POSTCREATE }
	          	onClick={this.handleItemClick}
	          	/>
	          
	          <Menu.Item
	          	name={ NavMenuRoutes.LOGOUT }
	          	active={ activeItem ===  NavMenuRoutes.LOGIN }
	          	onClick={this.handleItemClick}
	          	/>
	        </Menu.Menu>
	        }
	      </Menu>
	      );
    }
}

export default NavBar;