import React from 'react';
import { Link } from 'react-router-dom';


const HeaderBar = ({ currentUser, logout }) => {

    const sessionButtons = () => (

        <nav className="login-signup-nav">
            <Link className="nav-btn" to="/signup">SIGN UP</Link>
                &nbsp;
            <Link className="nav-btn" to="/login">SIGN IN</Link>
        </nav>

    );
    const loggedinGreeting = () => (
        <headernav className="header-nav">
            <h2 className="username-nav">Logged in as {currentUser.username}</h2>
            <button className="logout-nav" onClick={logout}>Log Out</button>
        </headernav>
    );

    return currentUser ? loggedinGreeting() : sessionButtons();
};

export default HeaderBar;























// const HeaderBar = ({ currentUser, logout }) => {

//     const sessionButtons = () => (
        
//         <nav className="login-signup-nav">
//             <Link className="nav-btn" to="/signup">SIGN UP</Link>
//                 &nbsp;
//             <Link className="nav-btn" to="/login">SIGN IN</Link>
//         </nav>

//     );
//     const loggedinGreeting = () => (
//         <headernav className="header-nav">
//             <h2 className="username-nav">Logged in as {currentUser.username}</h2>
//             <button className="logout-nav" onClick={logout}>Log Out</button>
//         </headernav>
//     );

//     return currentUser ? loggedinGreeting() : sessionButtons();
// };

// export default HeaderBar;