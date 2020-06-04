import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <div className='nav-bar'>
                <ul className='nav-bar-list'>
                    <li className='nav-bar-item' > FEATURED</li>
                    <li className='nav-bar-item' > | </li>
                    <li className='nav-bar-item' > CHARTS </li>
                    <li className='nav-bar-item' > | </li>                    
                    <li className='nav-bar-item' > LINKEDIN</li>                    
                    <li className='nav-bar-item' > | </li>
                    <li className='nav-bar-item' > SHOP</li>
                    <li className='nav-bar-item' > | </li>
                    <li className='nav-bar-item' > ICON LINKS</li>
                </ul>                 
            </div>
        )
    }
};

export default NavBar;