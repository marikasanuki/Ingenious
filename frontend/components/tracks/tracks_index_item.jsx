import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt, faEye } from '@fortawesome/free-solid-svg-icons'

const TracksIndexItem = (props) => {
    // console.log('hit tracks index item')
    // debugger;
    return (
        <li className='tracks-index-li'>
            <div>1</div>
            {/* <div>{props.key}</div> */}
            <div>{props.title}</div>
            <div>LYRICS</div>
            <div>track img</div>
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