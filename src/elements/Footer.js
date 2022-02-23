import './Footer.css'; 
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import React from 'react';  
import footerlogo from  './img/footerlogo.svg'; 

function Footer() {
    return ( 
        <footer id='footer'>
              <div className='top-footer'>
                  <div className='container'>
                      <div className='footer-logo'>
                          <img src={footerlogo} alt="logo" />
                      </div>
                      <div className='footer-menu'>
                          <ul>
                              <li>
                                  <NavLink to="/About">About</NavLink>
                              </li>
                              <li>
                                  <NavLink to="/#">FAQs</NavLink>
                              </li>
                              <li>
                                  <NavLink to="/#">Contact</NavLink>
                              </li>
                              <li>
                                  <NavLink to="/#">Terms of Service</NavLink>
                              </li>
                              <li>
                                  <NavLink to="/#">Privacy</NavLink>
                              </li>
                          </ul>
                      </div>      
                  </div>
              </div>
              <div className='bottom-footer'>
                  <div className='container'>
                      <p>Copyright © {(new Date().getFullYear())}.All Rights Reserved</p>
                  </div>
              </div>
        </footer>
    );
        

    
}
export default Footer;