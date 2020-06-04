import React from 'react';
import { Link } from 'react-router-dom';


const HeaderBar = ({ currentUser, logout }) => {
        const display = currentUser ? (
                <div className="header-nav">
                    <h2 className="username-nav">Logged in as {currentUser.username}</h2>
                    <button className="logout-nav" onClick={logout}>Log Out</button>
            </div>
        ) : (
                <div className="login-signup-nav">
                    
                    <Link className="nav-btn" to="/signup">SIGN UP</Link>
                &nbsp;
                    <Link className="nav-btn" to="/login">SIGN IN</Link>
                </div>
        );

        return (
            <header>    
                <a className='ingenious-header' href="/"><h2>INGENIOUS</h2></a>
                <div className='ingenious-header' >
                    {display}
                </div>
            </header>
        )
};

export default HeaderBar;


















