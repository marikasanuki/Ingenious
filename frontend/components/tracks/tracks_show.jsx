import React from "react";
import { Link } from 'react-router-dom';
import AnnotationsShow from '../annotations/annotations_show';

class TracksShow extends React.Component {
    constructor(props) {
        super(props);
        // this.handleMouseDown = this.handleMouseDown.bind(this);
        // this.handleMouseUp = this.handleMouseUp.bind(this);

        // this.state = {};
    }

    // handleMouseUp(e){
    //     this.setState({
    //         highlightUp: e.target
    //     })
    // }

    // handleMouseDown(e){
    //     this.setState({
    //         highlightDown: e.target
    //     })
    // }

    componentDidMount(){
        console.log('tracks show component mounted');
        debugger;
        this.props.fetchTrack(this.props.match.params.id);
    }

    render() {
        // const {track} = this.props;
        console.log('hit render function inside tracks show')
        // debugger;
        return (
            <div className='tracks-show-container' >
                <div className='tracks-show-outer-hed-container'>
                    
                    <div className='tracks-show-hed-container' >
                        <div className='tracks-show-hed-img-container' >
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
                    
                    
                    <div className='tracks-show-anno-comp' >
                            {<AnnotationsShow 
                                lyrics={this.props.track.lyrics}
                                // handleMouseDown={this.handleMouseDown}
                                // handleMouseUp={this.handleMouseUp}
                                annotations={this.props.annotations}
                            />}
                    </div>
                </div>
            </div>
        )
    }
};

export default TracksShow;