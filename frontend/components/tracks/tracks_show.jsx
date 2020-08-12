import React from "react";
import AnnotationsShow from '../annotations/annotations_show';
import CommentsForm from '../comments/comments_form';
import CommentsList from '../comments/comments_list';

class TracksShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        // console.log('tracks show component mounted');

        this.props.fetchTrack(this.props.match.params.id);
        this.props.fetchTrackComments(this.props.match.params.id);
        // console.log(this.props);
        // debugger;
    }

    render() {
        // console.log(this.props);
        // debugger;
        // console.log('tracksShow inside render function')
        // if (!this.props.track) {
        //     return <div>No track on first render</div> ;
        // }
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
                  loggedIn={this.props.loggedIn}
                  currentUser={this.props.currentUser}
                />
              }
            </div>
            
            <div className='comments-outer-cont'>
                <div className='comments-form-cont'>
                    {
                        <CommentsForm
                            createComment={this.props.createComment}
                            track={this.props.track}
                        
                        />
                    }
                </div>
                
                <div className='comments-list-cont'>
                    {
                        <CommentsList
                            comments={this.props.comments}
                            comment_authors={this.props.comments.comment_authors}
                            destroyComment={this.props.destroyComment}
                            currentUser={this.props.currentUser}
                        />
                    }
                </div>
            </div>
          </div>
        );
    }
};

export default TracksShow;