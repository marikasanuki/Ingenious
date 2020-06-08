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
            <div className='tracks-show-container' >
                <div className='tracks-show-hed-container' >
                    <div className='tracks-show-img'>img</div>
                    <div className='tracks-show-title' >{this.props.track.title}</div>
                    <div className='tracks-show-artist' >{this.props.track.artist}</div>
                    <div className='tracks-show-album' ><span className='tracks-show-alb-txt' >Album</span> {this.props.track.album}</div>
                </div>
                <div className='tracks-show-lyrics-container'>
                    <div className='tracks-show-mini-title' >{this.props.track.title} lyrics</div>
                    <div className='tracks-show-lyrics' >{this.props.track.lyrics}</div>   
                </div>
                <Link to={`/`}>Return to homepage</Link>
            </div>
        )
    }
};

export default TracksShow;