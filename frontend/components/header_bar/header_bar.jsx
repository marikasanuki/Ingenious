import React from 'react';
import { Link } from 'react-router-dom';


const HeaderBar = ({ currentUser, logout }) => {
        const display = currentUser ? (
            <div className="main-header">
                <div className='ingenious-header-container'>
                    <Link to="/" className='ingenious-header' >I N G E N I O U S</Link>
                </div>
                    <Link to="/" className="logout-header-btn" onClick={logout}>Sign Out</Link>
            </div>
        ) : (
                <div className="main-header">
                    <div className='ingenious-header-container'>
                        <Link to="/" className='ingenious-header' >I N G E N I O U S</Link>
                    </div>
                    <div className="session-btns" >
                        <Link to="/signup" className="session-btn" >SIGN UP</Link>
                        <Link to="/login" className="session-btn">SIGN IN</Link>
                    </div>
                </div>
        );

        return (
                <div >
                    {display}
                </div>
        )
};

export default HeaderBar;


















