import React from 'react';
import background from '../../../assets/images/lighthouse.jpeg';
import NewTagline from '../../NewTagline/NewTagline';
import classes from './Homepage.module.css';

const homepage = () => (
	<div style={{
		backgroundImage: `url(${background})`}}
		className={classes.Homepage}>
		<NewTagline />
		<a className="waves-effect waves-light btn-large brown lighten-1 z-depth-3">Support Indie Artists
		</a>
	</div>
);

export default homepage;