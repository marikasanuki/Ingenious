import React from "react";
import TracksIndexItem from './tracks_index_item';

class TracksIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { limit: 10 };
        this.onLoadMore = this.onLoadMore.bind(this);
        this.revealMoreTracks = this.revealMoreTracks.bind(this);
    }

    componentDidMount(){
        // console.log('Component mounted');
        // debugger;
        this.props.fetchTracks();
    }

    onLoadMore(){
        console.log(this.state);
        debugger;
        this.setState({
            limit: this.state.limit + 10
        });
    }

    revealMoreTracks(){
        const { tracks } = this.props;
        // console.log('hit render function in tracks index comp');
        // debugger;
        const trackNum = 1;
        return (
            <div className='tracks-index-container'>
                <div className='tracks-index-header'>CHARTS</div>
                <div className='tracks-index-subhead'>TRENDING ON INGENIOUS</div>
                <ol className='tracks-index-ol'>
                    {tracks.slice(0,this.state.limit).map(((ele, i) =>

                        (<TracksIndexItem
                            url={ele.id}
                            trackNum={trackNum + i}
                            title={ele.title}
                            artist={ele.artist}
                            album={ele.album}
                            lyrics={ele.lyrics}
                            image_url={ele.image_url}
                            conc_views={ele.conc_views}
                            total_views={ele.total_views} />)

                    ))
                    }
                </ol>
            </div>
        )
    }

    render() {
        const { tracks } = this.props;
        return (
            <div>
                {this.revealMoreTracks()}
                <div className='load-more-button-container'>
                    <button onClick={this.onLoadMore} className='load-more-button' >LOAD MORE</button>
                </div>
            </div>
        )

    }
};

export default TracksIndex;