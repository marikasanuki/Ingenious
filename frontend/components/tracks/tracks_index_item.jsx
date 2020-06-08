import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt, faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const TracksIndexItem = (props) => {
    console.log('hit tracks index item')
    debugger;
    return (
        <li className='tracks-index-li'>
            <div className='chart-num'>1</div>
            {/* <div>{props.key}</div> */}
            <div className='chart-img'>track img</div>
            <Link to={`/api/tracks/${props.key}`}> <div className='chart-title'>{props.title}</div></Link>
            <div className='chart-lyr'>LYRICS</div>
            <div className='chart-artist'>{props.artist}</div>
            <div className='fire-icon' >
                <FontAwesomeIcon icon={faFireAlt} />&nbsp;82
            </div>
            <div className='views-icon' >
                <FontAwesomeIcon icon={faEye} />&nbsp;47.1K
            </div>
        </li>
    );
}


export default TracksIndexItem;