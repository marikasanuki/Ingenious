import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {


    const sessionLinks = () => (

        <nav className="login-signup-nav">
            <Link className="nav-btn" to="/signup">SIGN UP</Link>
                &nbsp;&nbsp;
            <Link className="nav-btn" to="/login">SIGN IN</Link>
        </nav>

    );
    const personalGreeting = () => (
        <headernav className="header-nav">
            <h2 className="username-nav">Logged in as {currentUser.username}</h2>
            <button className="logout-nav" onClick={logout}>Log Out</button>
        </headernav>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default NavBar;