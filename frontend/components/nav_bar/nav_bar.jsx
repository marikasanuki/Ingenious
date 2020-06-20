import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faTwitter, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
                    <li><a className='nav-bar-item' href="https://open.spotify.com/playlist/4atDdC0moSlxG5JLEJ9HpJ?si=YA4xkHxnQRCPPv-n0WUOow" target="blank" >SPOTIFY</a></li>
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
                        <a className='nav-bar-item' href="https://mail.google.com/mail/?view=cm&fs=1&to=mari.kasanuki@gmail.com" target="blank" >
                            <FontAwesomeIcon className='fa-icon' icon={faEnvelope} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </a>
                    </li>
                </ul>                 
            </div>
        )
    }
};


export default NavBar;