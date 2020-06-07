import React from "react";
import TrackItem from './track_item';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt, faEye } from '@fortawesome/free-solid-svg-icons'



class TracksIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        const test = this.props.fetchTracks();
        // console.log(test);
        // debugger
    }

    render() {
        const { tracks } = this.props;
        // debugger;

        // const tracksArray = tracks.map((track, i => {
        //     return (
        //         <li>
                    {/* {track.title}

                    {track.artist} */}
                // </li>
            // )
        // } ))
        // debugger;
        return (
            <div className='tracks-index-container'>
                <div className='tracks-index-header'>CHARTS</div>
                <div className='tracks-index-subhead'>TRENDING ON INGENIOUS</div>

                <ul>
                    {/* {tracksArray} */}
                </ul>






                <div className='fire-icon' ><FontAwesomeIcon icon={faFireAlt} />&nbsp;82</div>
                <div className='views-icon' ><FontAwesomeIcon icon={faEye} />&nbsp;47.1K</div>


            </div>
        )
    }
};

export default TracksIndex;