import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt, faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


class TracksIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <li className='tracks-index-li'>
                <Link to={`/api/tracks/${this.props.url}`}>
                    <div className='chart-num'>{this.props.trackNum}</div>
                </Link>
                <Link to={`/api/tracks/${this.props.url}`}>
                    <img className='chart-img' src={window.macMillerPrograms} />                    
                </Link>
                <Link to={`/api/tracks/${this.props.url}`}>
                    <div className='chart-title'>{this.props.title} <span className='chart-lyr'>LYRICS</span></div>
                </Link>
                <Link to={`/api/tracks/${this.props.url}`}>
                    <div className='chart-artist'>{this.props.artist}</div>
                </Link>
                <Link to={`/api/tracks/${this.props.url}`}>
                    <div className='fire-icon' >
                        <FontAwesomeIcon icon={faFireAlt} />&nbsp;82
                </div>
                </Link>
                <Link to={`/api/tracks/${this.props.url}`}>
                    <div className='views-icon' >
                        <FontAwesomeIcon icon={faEye} />&nbsp;47.1K
                </div>
                </Link>
            </li>
        );
    }
};

export default TracksIndexItem;