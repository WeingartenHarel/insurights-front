import React, { Component } from "react";
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import HomePage from './../HomePage/HomePage';
import styles from './header.module.scss';
import { NavLink, Link, withRouter } from 'react-router-dom'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component {
  render() {
    return <div className={styles.appHeader}>
        <NavLink className={styles.btnHome} to="/">  
         
          <div className={styles.icon} >
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="compass" className="svg-inline--fa fa-compass fa-w-16" role="img" viewBox="0 0 496 512"><path fill="currentColor" d="M225.38 233.37c-12.5 12.5-12.5 32.76 0 45.25 12.49 12.5 32.76 12.5 45.25 0 12.5-12.5 12.5-32.76 0-45.25-12.5-12.49-32.76-12.49-45.25 0zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm126.14 148.05L308.17 300.4a31.938 31.938 0 0 1-15.77 15.77l-144.34 65.97c-16.65 7.61-33.81-9.55-26.2-26.2l65.98-144.35a31.938 31.938 0 0 1 15.77-15.77l144.34-65.97c16.65-7.6 33.8 9.55 26.19 26.2z"/></svg>
          </div>
            My Medical App
        </NavLink>
    </div>;
  }
}

export default Header;
