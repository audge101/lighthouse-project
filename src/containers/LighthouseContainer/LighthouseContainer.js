import React, { Component } from 'react';
//import classes from './LighthouseContainer.module.css';
import { Route }from 'react-router-dom';
import Aux from '../../hoc/Aux/Aux';
import Homepage from '../../components/Content/Homepage/Homepage';
import About from '../../components/Content/About/About';
import Team from '../../components/Content/Team/Team';


class LighthouseContainer extends Component {
	render() {
		return (
			<Aux>
				<Route path='/' exact component={Homepage} />
				<Route path='/about' exact component={About} />
				<Route path='/team' exact component={Team} />
			</Aux>
		);
	}
}

export default LighthouseContainer;