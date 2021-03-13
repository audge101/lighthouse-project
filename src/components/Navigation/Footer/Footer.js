import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import classes from './Footer.module.css';

const footer = () => (
    <footer className="page-footer deep-orange darken-2" >
      <div className="container" className={classes.Footer}>
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Join Our Mailing List!</h5>
            <p className="grey-text text-lighten-4">Stay up-to-date with the latest news.</p>
            <MailchimpSubscribe 
            	url={process.env.REACT_APP_MAILCHIMP_URL}/>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">IMDb</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Kilo Entertainment</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Crowd Funding</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Give Back</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright deep-orange darken-4">
        <div className="container">
        © 2021 Copyright Kilo Entertainment
        </div>
      </div>
    </footer>
);

export default footer;