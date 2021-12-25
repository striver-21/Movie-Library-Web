import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import { Navbar, Nav, } from 'react-bootstrap';
import './component.css';


export default function Login(props) {
  
    

    return (
     <Navbar collapseOnSelect expand="lg" bg="light"  className="nav-bar">
            
            <Navbar.Brand href={props.isAuthenticated? "/app":"/"}><img src={require('../Assets/logo.jpg') }  width="48px" height="48px" alt="logo"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="mr-auto">
                   {!props.isAuthenticated&& <Link to="/login" className="nav-link">Sign in</Link>}
                   {!props.isAuthenticated&&<Link to="/register" className="nav-link">Register</Link>}
                    

                </Nav>
                
            </Navbar.Collapse>
        </Navbar>

        
    );

   
}
