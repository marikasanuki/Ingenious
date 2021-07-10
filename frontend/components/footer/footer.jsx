import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Footer extends React.Component {

    render() {
        return (
            <div className="footer-container" >
                <div className="footer-tagline">
                    Ingenious is the world’s biggest collection of code-related song lyrics and programming music knowledge.
                </div>
                <ul className="footer-list-ul" >
                    <li className="footer-list-li" >
                        <a href="https://github.com/marikasanuki/Ingenious" target="blank" >
                            <FontAwesomeIcon className="footer-icon" icon={faGithub} />
                        </a>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/marikasanuki/" target="blank" >
                            <FontAwesomeIcon className="footer-icon" icon={faLinkedinIn} />
                        </a>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://open.spotify.com/playlist/4atDdC0moSlxG5JLEJ9HpJ?si=YA4xkHxnQRCPPv-n0WUOow" target="blank" >
                            <FontAwesomeIcon className="footer-icon" icon={faSpotify} />
                        </a>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mari.kasanuki@gmail.com" target="blank" >
                            <FontAwesomeIcon className="footer-icon" icon={faEnvelope} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </a>
                    </li>
                </ul>
                <div className="footer-gen">Ingenious is a <a className="footer-gen" href="https://genius.com/" target="blank" >Genius.com</a> clone project</div>
                <div className="footer-byline" >Developed by <a className="footer-byline-link" href="https://marikasanuki.com/" target="blank" >Mari Kasanuki</a></div>
                <div className="footer-disclaimer" >Not for commercial use. I do not own the rights to any featured music or lyrics.</div>
            </div>
        )
    }
};

export default Footer;
