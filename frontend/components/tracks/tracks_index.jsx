import React from "react";
import TrackItem from './track_item';

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
            <div>
                test
                <p>{tracks}</p>

            </div>
        )
    }
};

export default TracksIndex;