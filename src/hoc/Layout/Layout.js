import React from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

const layout = (props) => (
	<Aux>
		<Toolbar />
		<main className={classes.Content}>
			{props.children}
		</main>
	</Aux>
);

export default layout;
