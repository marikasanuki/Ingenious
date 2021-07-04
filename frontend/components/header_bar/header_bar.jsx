import React from "react";
import { Link } from "react-router-dom";


const HeaderBar = ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div className="main-header">
            <form className="search-bar-container">
                <input
                    className="search-bar-input"
                    placeholder="Search lyrics & more"
                    disabled
                ></input>
            </form>
            <div className="ingenious-header-container">
                <Link to="/" className="ingenious-header" >INGENIOUS</Link>
            </div>
            <div className="session-btn-container">
                <div className="username-header">
                    {currentUser.username}
                </div>
                <Link to="/" className="logout-header-btn" onClick={logout}>SIGN OUT</Link>
            </div>
        </div>
    ) : (
            <div className="main-header">
                <form className="search-bar-container">
                    <input
                        className="search-bar-input"
                        placeholder="Search lyrics & more"
                        disabled
                    ></input>
                </form>
                <div className="ingenious-header-container">
                    <Link to="/" className="ingenious-header" >INGENIOUS</Link>
                </div>
                <div className="session-btn-container" >
                    <Link to="/signup" className="session-btn" >SIGN UP</Link>
                    <Link to="/login" className="session-btn">SIGN IN</Link>
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
