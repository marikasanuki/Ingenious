import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons'

class VotesShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='vote-container'>
                <FontAwesomeIcon className='vote-thumb-up-icon' icon={faThumbsUp} />
                <span className='vote-count'>#</span>
                <FontAwesomeIcon className='vote-thumb-down-icon' icon={faThumbsDown} />
            </div>
        )
    }
};

export default VotesShow;