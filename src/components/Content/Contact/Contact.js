import React from 'react';
import Footer from '../Navigation/Footer/Footer';
import classes from './Contact.module.css';

const contact = () => (
	<div className={classes.Contact}>
	  <div class="row">
	    <div class="col s12 m8">
	      <div class="card blue-grey darken-1">
	        <div class="card-content white-text" className={classes.ContactCard}>
	          <span class="card-title">Contact Us</span>
	          <p>I am a very simple card. I am good at containing small bits of information.
	          I am convenient because I require little markup to use effectively.</p>
	        </div>
	        <div class="card-action">
	          <a href="#">This is a link</a>
	          <a href="#">This is a link</a>
	        </div>
	      </div>
	    </div>
	  </div>
	  <Footer />
	</div>
);

export default contact;