import React, { Component } from 'react';
import lighthouse from '../../../assets/images/distant-lighthouse.jpeg';
import cake from '../../../assets/images/cake.jpeg';
import Aux from '../../../hoc/Aux/Aux';
import classes from './About.module.css';
import M from  'materialize-css/dist/js/materialize.min.js';

class About extends Component {
	componentDidMount() {
  		let parallax = document.querySelector('.parallax');
  		M.Parallax.init(parallax, {});
	}

	render() {
		return (
			<div className={classes.About}>
			    <div className="parallax-container">
      				<div className="parallax"><img src={cake} style={{height: '500px', objectFit: 'cover'}} />
      				</div>
    			</div>
    			<div className="section white">
     				<div className="row container">
        				<h3 className="header grey-text">Our Story</h3>
        				<p className="grey-text text-darken-3 lighten-3">Three tween boys trot up the main street of a quaint beach town. Thirteen-year-old Tommy leads the way as his adorable six-year-old sister Tawny struggles to keep up. Tommy comes across the local produce vendor... the precocious boy grabs some oranges and tosses them to his friends and Tawny. The vendor confronts him and Tommy runs out into the street - only to be struck by a car.</p>
      				</div>
    			</div>
    			<div class="parallax-container">
      				<div className="parallax"><img src='../../../assets/images/distant-lighthouse.jpeg'  />
      				</div>
    			</div>
    			<div className="section white">
     				<div className="row container">
        				<h3 className="header grey-text">About</h3>
        				<p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
      				</div>
    			</div>
    			<div class="parallax-container">
      				<div className="parallax"><img src={cake}  />
      				</div>
    			</div>
			</div>
		);
	}
}

export default About;