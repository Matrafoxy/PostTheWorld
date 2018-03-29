import { withTracker } from 'meteor/react-meteor-data';

import React from 'react';
import { Menu } from 'semantic-ui-react'


import { Meteor } from 'meteor/meteor';

import route from '/imports/routing/router.js';

import {NavMenuEnum, NavMenuRoutes} from '/imports/api/menu/routes';

class NavBar extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			activeItem: 'home'
		}
	}
	
	handleItemClick(name){
			
			this.setState({ activeItem: name });
			
			route.go(NavMenuRoutes[name]);
	}


	render(){

		const { activeItem } = this.state;

		return(
			<Menu inverted>
			 <Menu.Item
			 	 name={ NavMenuEnum.HOME } 
			 	 active={ activeItem === NavMenuEnum.HOME } 
			 	 onClick={() => this.handleItemClick(NavMenuEnum.HOME)} 
			 	 />
	       
	        <Menu.Item 
	        	name={ NavMenuEnum.POSTS } 
	        	active={ activeItem === NavMenuEnum.POSTS } 
	        	onClick={() => this.handleItemClick(NavMenuEnum.POSTS)} 
	        	/>

	        { !Meteor.userId() ?
	           <Menu.Item
	           		name={ NavMenuEnum.LOGIN } 
	           		active={ activeItem === NavMenuEnum.LOGIN } 
	           		onClick={() => this.handleItemClick(NavMenuEnum.LOGIN)} />
	        :

	        <Menu.Menu position='right'>
	          <Menu.Item 
	          	name={ NavMenuEnum.NEWPOST }  
	          	active={ activeItem ===  NavMenuEnum.NEWPOST } 
	          	onClick={() => this.handleItemClick(NavMenuEnum.NEWPOST)} 
	          	/>
	          
	          <Menu.Item 
	          	name={ NavMenuEnum.LOGOUT }  
	          	active={ activeItem ===  NavMenuEnum.LOGIN } 
	          	onClick={() => this.handleItemClick(NavMenuEnum.LOGOUT)} 
	          	/>
	        </Menu.Menu>
	        }
	      </Menu>
	      );
	}
}

export default NavBar;