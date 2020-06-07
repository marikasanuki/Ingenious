import React from "react";
import TracksIndexItem from './tracks_index_item';

class TracksIndex extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount(){
        // console.log('Component mounted');
        // debugger;
        this.props.fetchTracks();
    }

    render() {

        const { tracks } = this.props;
        // console.log('hit render function');
        // debugger;
        return (
            <div className='tracks-index-container'>
                <div className='tracks-index-header'>CHARTS</div>
                <div className='tracks-index-subhead'>TRENDING ON INGENIOUS</div>
                <ol className='tracks-index-ol'>
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
                </ol>

            </div>
        )
    }
};

export default TracksIndex;