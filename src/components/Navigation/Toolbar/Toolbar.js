import React from 'react';
import classes from './Toolbar.module.css';
import { NavLink } from 'react-router-dom';

const toolbar = (props) => (
	<React.Fragment>
		<div className="navbar-fixed">
			<nav>
		    	<div className="nav-wrapper yellow darken-3">
			      <a href="#" className="brand-logo" className={classes.Toolbar}>The Lighthouse</a>
			      <ul id="nav-mobile" className="right hide-on-med-and-down">
			        <li><NavLink exact to="/">Home</NavLink></li>
			        <li><NavLink to="/about">About</NavLink></li>
			        <li><NavLink to="/team">Team</NavLink></li>
			        <li><NavLink to="/donate">Donate</NavLink></li>
			        <li><NavLink to="/awards">Awards</NavLink></li>
			        <li><NavLink to="/stills">Stills</NavLink></li>
			        <li><NavLink to="/screenings">Screenings</NavLink></li>
			        <li><NavLink to="/contact">Contact</NavLink></li>
			      </ul>
			    </div>
			</nav>
		</div>
	</React.Fragment>
);

export default toolbar;

