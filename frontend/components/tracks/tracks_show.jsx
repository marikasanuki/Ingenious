import React from "react";
import AnnotationsShow from '../annotations/annotations_show';


class TracksShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        console.log('tracks show component mounted');

        this.props.fetchTrack(this.props.match.params.id);
    }

    render() {
        console.log('tracksShow inside render function')
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
                />
              }
            </div>
          </div>
        );
    }
};

export default TracksShow;