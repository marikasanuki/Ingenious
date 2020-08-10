import React from 'react';
import { Link } from 'react-router-dom';


const HeaderBar = ({ currentUser, logout }) => {
        const display = currentUser ? (
            <div className="main-header">
                <div className='ingenious-header-container'>
                    <Link to="/" className='ingenious-header' >I&nbsp;N&nbsp;G&nbsp;E&nbsp;N&nbsp;I&nbsp;O&nbsp;U&nbsp;S</Link>
                </div>
                    <div className="username-header">
                        {currentUser.username}
                    </div>
                    <Link to="/" className="logout-header-btn" onClick={logout}>SIGN&nbsp;OUT</Link>
            </div>
        ) : (
                <div className="main-header">
                    <div className='ingenious-header-container'>
                        <Link to="/" className='ingenious-header' >I&nbsp;N&nbsp;G&nbsp;E&nbsp;N&nbsp;I&nbsp;O&nbsp;U&nbsp;S</Link>
                    </div>
                    <div className="session-btns" >
                        <Link to="/signup" className="session-btn" >SIGN&nbsp;UP</Link>
                        <Link to="/login" className="session-btn">SIGN&nbsp;IN</Link>
                    </div>
                </div>
        );

        return (
            <div className="main-header-container">
                    {display}
            </div>
        )
};

export default HeaderBar;


















