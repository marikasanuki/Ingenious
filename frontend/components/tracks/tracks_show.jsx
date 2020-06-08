import React from "react";
import { Link } from 'react-router-dom';

class TracksShow extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        console.log('tracks show component mounted');
        debugger;
        this.props.fetchTrack(this.props.match.params.track.id);
    }

    render() {
        const {track} = this.props;
        console.log('render function inside tracks show')
        debugger;
        return (
            <div>
                <div>{track.title}</div>
                <div>{track.artist}</div>
                <div>{track.album}</div>
                <div>{track.lyrics}</div>
                <Link to={`/`}>Return to homepage</Link>
            </div>
        )
    }
};

export default TracksShow;