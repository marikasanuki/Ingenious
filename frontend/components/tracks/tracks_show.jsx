import React from "react";
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

        this.props.fetchTrack(this.props.match.params.id);
        debugger;
        // this.props.createAnnotation(this.props.match.params.id);
    }



    render() {
        console.log('hit render function inside tracks show')
        console.log(this.props.track)
         debugger;
        return (
          <div className="tracks-show-container">
            <div className="tracks-show-outer-hed-container">
              <div className="tracks-show-hed-container">
                <div className="tracks-show-hed-img-container">
                  <img
                    className="tracks-show-img"
                    src={this.props.track.image_url}
                  />

                  <div className="tracks-show-hed-words-container">
                    <div className="tracks-show-title">
                      {this.props.track.title}
                    </div>
                    <div className="tracks-show-artist">
                      {this.props.track.artist}
                    </div>
                    <div className="tracks-show-album">
                      <span className="tracks-show-alb-txt">Album</span>{" "}
                      {this.props.track.album}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>

              {
                <AnnotationsShow
                  track={this.props.track}
                  lyrics={this.props.track.lyrics}
                  annotations={this.props.annotations}
                  createAnnotation={this.props.createAnnotation}  
                  // handleMouseDown={this.handleMouseDown}
                  // handleMouseUp={this.handleMouseUp}
                />
              }
            </div>
          </div>
        );
    }
};

export default TracksShow;