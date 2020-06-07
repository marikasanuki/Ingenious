import React from "react";
import TracksIndexItem from './tracks_index_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt, faEye } from '@fortawesome/free-solid-svg-icons'



class TracksIndex extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount(){
        console.log('Component mounted');
        // debugger;
        this.props.fetchTracks();
    }

    render() {

        const { tracks } = this.props;
        console.log('hit render function');
        debugger;
        return (
            <div className='tracks-index-container'>
                <div className='tracks-index-header'>CHARTS</div>
                <div className='tracks-index-subhead'>TRENDING ON INGENIOUS</div>
                <ul className='tracks-index-ul'>
                    { 
                    tracks.map((ele => 
                        
                        (<TracksIndexItem
                            key={ele.id}
                            title={ele.title}
                            artist={ele.artist}
                            album={ele.album}
                            lyrics={ele.lyrics} />)
                        
                        ))

                        }
                </ul>
                <div className='fire-icon' >
                    <FontAwesomeIcon icon={faFireAlt} />&nbsp;82
                </div>
                <div className='views-icon' >
                    <FontAwesomeIcon icon={faEye} />&nbsp;47.1K
                </div>
            </div>
        )
    }
};

export default TracksIndex;