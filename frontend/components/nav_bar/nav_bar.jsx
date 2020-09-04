import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class NavBar extends React.Component {
    render() {
        return (
            <div className='nav-bar'>
                <ul className='nav-bar-list-ul'>
                    <li className='nav-bar-item' ><a className='nav-bar-item' href="https://github.com/marikasanuki/Ingenious" target="blank" >GITHUB</a></li>   
                    <li className='nav-bar-item-pipe' >|</li>
                    <li className='nav-bar-item'><Link className='nav-bar-item' to={`/`}>CHARTS</Link></li>
                    <li className='nav-bar-item-pipe' >|</li>                    
                    <li className='nav-bar-item'><a className='nav-bar-item' href="https://www.linkedin.com/in/marikasanuki/" target="blank" >LINKEDIN</a></li>                    
                    <li className='nav-bar-item-pipe' >|</li>
                    <li className='nav-bar-item'><a className='nav-bar-item' href="https://open.spotify.com/playlist/4atDdC0moSlxG5JLEJ9HpJ?si=YA4xkHxnQRCPPv-n0WUOow" target="blank" >SPOTIFY</a></li>
                    <li className='nav-bar-item-pipe' >|</li>
                    <li className='nav-bar-icons-li'>
                        <a className='nav-bar-item-icon' href="https://github.com/marikasanuki/Ingenious" target="blank" >
                            <FontAwesomeIcon className='fa-icon' icon={faGithub} />
                        </a>
                        
                        <a className='nav-bar-item-icon' href="https://www.linkedin.com/in/marikasanuki/" target="blank" >
                            <FontAwesomeIcon className='fa-icon' icon={faLinkedinIn} />
                        </a>
                        
                        <a className='nav-bar-item-icon' href="https://open.spotify.com/playlist/4atDdC0moSlxG5JLEJ9HpJ?si=YA4xkHxnQRCPPv-n0WUOow" target="blank" >
                            <FontAwesomeIcon className='fa-icon' icon={faSpotify} />
                        </a>
                        
                        <a className='nav-bar-item-icon' href="https://mail.google.com/mail/?view=cm&fs=1&to=mari.kasanuki@gmail.com" target="blank" >
                            <FontAwesomeIcon className='fa-icon' icon={faEnvelope} />
                        </a>
                    </li>
                </ul>                 
            </div>
        )
    }
};

export default NavBar;