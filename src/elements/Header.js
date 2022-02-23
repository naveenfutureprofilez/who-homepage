import './Header.css' 
import React from 'react';  
import logo from './img/logo.svg';
import jQuery from 'jquery';
// import { useState, useEffect } from 'react';

function Header() {
    return ( 
        <header id='header'>
            <div className='container'>
               <img src={logo} className="logo" alt="logo" />
            </div>
        </header>
    ); 
        

    
}
    export default Header;