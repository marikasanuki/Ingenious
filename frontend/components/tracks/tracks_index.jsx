import React from "react";
import TrackItem from './track_item';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt, faEye } from '@fortawesome/free-solid-svg-icons'



class TracksIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.fetchTracks();
    }

    render() {
            // debugger;
        const { tracks } = this.props.tracks;
        return (
            <div className='tracks-index-container'>
                <div className='tracks-index-header'>CHARTS</div>
                <div className='tracks-index-subhead'>TRENDING ON INGENIOUS</div>

                <div className='fire-icon' ><FontAwesomeIcon icon={faFireAlt} />&nbsp;82</div>
                <div className='views-icon' ><FontAwesomeIcon icon={faEye} />&nbsp;47.1K</div>
                <p>{tracks}</p>

            </div>
        )
    }
};

export default TracksIndex;