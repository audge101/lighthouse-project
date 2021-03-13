import React, { Component } from 'react';
//import classes from './LighthouseContainer.module.css';
import { Route }from 'react-router-dom';
import Aux from '../../hoc/Aux/Aux';
import Homepage from '../../components/Content/Homepage/Homepage';
import About from '../../components/Content/About/About';
import Team from '../../components/Content/Team/Team';
import Contact from '../../components/Content/Contact/Contact';
import Donate from '../../components/Content/Donate/Donate';
import Awards from '../../components/Content/Awards/Awards';
import Stills from '../../components/Content/Stills/Stills';
import Screenings from '../../components/Content/Screenings/Screenings';


class LighthouseContainer extends Component {
	render() {
		return (
			<Aux>
				<Route path='/' exact component={Homepage} />
				<Route path='/about' exact component={About} />
				<Route path='/team' exact component={Team} />
				<Route path='/contact' exact component={Contact} />
				<Route path='/donate' exact component={Donate} />
				<Route path='/awards' exact component={Awards} />
				<Route path='/stills' exact component={Stills} />	
				<Route path='/Screenings' exact component={Screenings} />	
			</Aux>
		);
	}
}

export default LighthouseContainer;