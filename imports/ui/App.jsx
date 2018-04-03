// file: /imports/ui/App.jsx
import React from 'react';

import PropTypes from 'prop-types';

import NavBar from '/imports/ui/pages/menu/NavBar';


let app =  ({main, routeProps}) => {
    // main represents the component to render passed from the router
    // route props represent the properties that it receives from the router
    
    // where we do createElement, that's where your components will get rendered.

    return (
        <div id="app">
            <NavBar />
            {React.createElement(main, routeProps)}
        </div>
    )
}
app.propTypes = {
    main: PropTypes.func,
    routeProps: PropTypes.object
}



export default app;
