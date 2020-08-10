import { connect } from 'react-redux';
import TracksShow from './tracks_show';
import { fetchTrack } from '../../actions/track_actions';
import { fetchAnnotation, createAnnotation, updateAnnotation, destroyAnnotation } from '../../actions/annotation_actions';
import { fetchTrackComments, createComment, destroyComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
        // console.log('hit mstp in tracks show container')
        // debugger;
    return ({
        track: state.entities.tracks, 
        annotations: state.entities.annotations,
        comments: state.entities.comments,
        comment_authors: state.entities.comment_authors,
    })
};

const mapDispatchToProps = (dispatch) => {
        // console.log('hit mdtp in tracks show container')
        // debugger;
    return ({
        fetchTrack: (key) => dispatch(fetchTrack(key)),

        fetchAnnotation: (annotation) => dispatch(fetchAnnotation(annotation)),
        createAnnotation: (annotation) => dispatch(createAnnotation(annotation)),
        updateAnnotation: (annotation) => dispatch(updateAnnotation(annotation)),
        destroyAnnotation: (annotation) => dispatch(destroyAnnotation(annotation)),
        fetchTrackComments: (trackId) => dispatch(fetchTrackComments(trackId)),
        createComment: (comment) => dispatch(createComment(comment)),
        destroyComment: (commentId) => dispatch(destroyComment(commentId)),
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(TracksShow)