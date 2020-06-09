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
                <div className='tracks-show-outer-hed-container'>
                    
                    <div className='tracks-show-hed-container' >
                        <div className='tracks-show-img'> <img src="https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F9b7c87888ea4091996f947a8ba0d8f2a.1000x1000x1.png" alt="test img"></img></div>
                        <div className='tracks-show-hed-words-container' >
                            <div className='tracks-show-title' >{this.props.track.title}</div>
                            <div className='tracks-show-artist' >{this.props.track.artist}</div>
                            <div className='tracks-show-album' ><span className='tracks-show-alb-txt' >Album</span> {this.props.track.album}</div>
                        </div>
                    </div>
                </div>
                <div className='tracks-show-lyrics-container'>
                    <div className='tracks-show-mini-title' >{this.props.track.title} lyrics</div>
                    <div className='tracks-show-lyrics' >{this.props.track.lyrics}</div>   
                </div>
            </div>
        )
    }
};

export default TracksShow;