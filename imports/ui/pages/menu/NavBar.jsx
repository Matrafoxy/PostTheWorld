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
	
	handleItemClick = (e, {name}) => {
			console.log('blldsldalsda');
			this.setState({ activeItem: name });
			console.log(name);
			route.go(NavMenuRoutes[name]);
	}


	render(){

		const { activeItem } = this.state;

		return(
			<Menu inverted>
			 <Menu.Item name={ NavMenuEnum.HOME } active={ activeItem === NavMenuEnum.HOME } onClick={this.handleItemClick} />
	        <Menu.Item name={ NavMenuEnum.POSTS } active={ activeItem === NavMenuEnum.POSTS } onClick={this.handleItemClick} />
	        { !Meteor.userId() ?
	           <Menu.Item
	           		name={ NavMenuEnum.LOGIN } 
	           		active={ activeItem === NavMenuEnum.LOGIN } 
	           		onClick={this.handleItemClick} />
	        :
	        <Menu.Menu position='right'>
	          <Menu.Item name={ NavMenuEnum.LOGOUT }  active={ activeItem ===  NavMenuEnum.LOGIN } onClick={this.handleItemClick} />
	        </Menu.Menu>
	        }
	      </Menu>
	      );
	}
}

export default NavBar;