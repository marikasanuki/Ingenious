import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt, faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const TracksIndexItem = (props) => {
    console.log('hit tracks index item')
    debugger;

    return (
        <li className='tracks-index-li'>
            <Link to={`/api/tracks/${props.url}`}> 
                <div className='chart-num'>{props.trackNum}</div>
            </Link>
            <Link to={`/api/tracks/${props.url}`}> 
                <div className='chart-img'>img</div>
            </Link>
            <Link to={`/api/tracks/${props.url}`}> 
                <div className='chart-title'>{props.title} <span className='chart-lyr'>LYRICS</span></div>
            </Link>
            <Link to={`/api/tracks/${props.url}`}> 
                <div className='chart-artist'>{props.artist}</div>
            </Link>
            <Link to={`/api/tracks/${props.url}`}> 
                <div className='fire-icon' >
                    <FontAwesomeIcon icon={faFireAlt} />&nbsp;82
                </div>
            </Link>
            <Link to={`/api/tracks/${props.url}`}> 
                <div className='views-icon' >
                    <FontAwesomeIcon icon={faEye} />&nbsp;47.1K
                </div>
            </Link>
        </li>
    );
}


export default TracksIndexItem;