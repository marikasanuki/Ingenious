import React from "react";
import { Link } from 'react-router-dom';

class TracksShow extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        // console.log('tracks show component mounted');
        // debugger;
        this.props.fetchTrack(this.props.match.params.id);
    }

    render() {
        // const {track} = this.props;
        // console.log('hit render function inside tracks show')
        // debugger;
        return (
            <div className='tracks-show-container' >
                <div className='tracks-show-outer-hed-container'>
                    
                    <div className='tracks-show-hed-container' >
                        <div className='tracks-show-hed-img-container' >
                            {/* <img className='tracks-show-hed-img-container' src={window.backgroundHeader} /> */}
                            {/* <img className='tracks-show-img' src="https://media.wnyc.org/i/800/0/l/85/1/blackbox.jpeg" alt="test img"></img> */}

                            <img className='tracks-show-img' src={window.macMillerPrograms} />

                            <div className='tracks-show-hed-words-container' >
                                <div className='tracks-show-title' >{this.props.track.title}</div>
                                <div className='tracks-show-artist' >{this.props.track.artist}</div>
                                <div className='tracks-show-album' ><span className='tracks-show-alb-txt' >Album</span> {this.props.track.album}</div>
                            </div>
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