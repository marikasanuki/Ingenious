import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt, faEye } from '@fortawesome/free-solid-svg-icons'

const TracksIndexItem = (props) => {
    console.log('hit tracks index item')
    debugger;
    return (
        <li>
            {/* <h3>{props.key}</h3> */}
            <div>{props.title}</div>
            <span>LYRICS</span>
            <div>Track Image Goes Here</div>
            <div>{props.artist}</div>
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