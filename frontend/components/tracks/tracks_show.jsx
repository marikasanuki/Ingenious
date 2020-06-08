import React from "react";
import { Link } from 'react-router-dom';

class TracksShow extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        console.log('tracks show component mounted');
        debugger;
        this.props.fetchTrack(this.props.match.params.id);
    }

    render() {
        // const {track} = this.props;
        console.log('hit render function inside tracks show')
        debugger;
        return (
            <div>
                <div>{this.props.track.title}</div>
                <div>{this.props.track.artist}</div>
                <div>{this.props.track.album}</div>
                <div>{this.props.track.lyrics}</div>
                <Link to={`/`}>Return to homepage</Link>
            </div>
        )
    }
};

export default TracksShow;