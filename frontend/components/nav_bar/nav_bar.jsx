import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faTwitter, faSpotify } from '@fortawesome/free-brands-svg-icons'

class NavBar extends React.Component {
    render() {
        return (
            <div className='nav-bar'>
                <ul className='nav-bar-list-ul'>
                    <li><a className='nav-bar-item' href="https://github.com/marikasanuki" target="blank" >GITHUB</a></li>   
                    <li className='nav-bar-item' >&nbsp;|&nbsp;</li>
                    <li><Link className='nav-bar-item' to={`/`}>CHARTS</Link></li>
                    <li className='nav-bar-item' >&nbsp;|&nbsp;</li>                    
                    <li><a className='nav-bar-item' href="https://www.linkedin.com/in/marikasanuki/" target="blank" >LINKEDIN</a></li>                    
                    <li className='nav-bar-item' >&nbsp;|&nbsp;</li>
                    <li><a className='nav-bar-item' href="https://teespring.com/stores/genius-merch" target="blank" >SHOP</a></li>
                    <li className='nav-bar-item' >&nbsp;|&nbsp;</li>
                    <li>
                        <a className='nav-bar-item' href="https://github.com/marikasanuki" target="blank" >
                            <FontAwesomeIcon className='fa-icon' icon={faGithub} />
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className='nav-bar-item' href="https://www.linkedin.com/in/marikasanuki/" target="blank" >
                            <FontAwesomeIcon className='fa-icon' icon={faLinkedinIn} />
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className='nav-bar-item' href="https://open.spotify.com/playlist/4atDdC0moSlxG5JLEJ9HpJ?si=YA4xkHxnQRCPPv-n0WUOow" target="blank" >
                            <FontAwesomeIcon className='fa-icon' icon={faSpotify} />
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className='nav-bar-item' href="https://twitter.com/marikasanuki?lang=en" target="blank" >
                            <FontAwesomeIcon className='fa-icon' icon={faTwitter} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </a>
                    </li>
                </ul>                 
            </div>
        )
    }
};


export default NavBar;