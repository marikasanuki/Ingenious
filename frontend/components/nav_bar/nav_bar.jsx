import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <div className='nav-bar'>
                <ul className='nav-bar-list'>
                    <li><a className='nav-bar-item' href="https://github.com/marikasanuki" target="blank" > FEATURED</a></li>   
                    <li className='nav-bar-item' > | </li>
                    <li><Link className='nav-bar-item' to={`/tracks`}> CHARTS </Link></li>
                    <li className='nav-bar-item' > | </li>                    
                    <li><a className='nav-bar-item' href="https://www.linkedin.com/in/marikasanuki/" target="blank" > LINKEDIN</a></li>                    
                    <li className='nav-bar-item' > | </li>
                    <li><a className='nav-bar-item' href="https://teespring.com/stores/genius-merch" target="blank" > SHOP</a></li>
                    <li className='nav-bar-item' > | </li>
                    <li><a className='nav-bar-item' href="https://github.com/marikasanuki" target="blank" > ICON LINKS</a></li>
                </ul>                 
            </div>
        )
    }
};


export default NavBar;