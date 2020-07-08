import { connect } from 'react-redux';
import TracksShow from './tracks_show';
import { fetchTrack } from '../../actions/track_actions';
import { fetchAnnotation, createAnnotation, updateAnnotation, destroyAnnotation } from '../../actions/annotation_actions';

const mapStateToProps = (state, ownProps) => {
        console.log('hit mstp in tracks show container')
        // debugger;
    return ({
        track: state.entities.tracks, 
        annotations: state.entities.annotations,
    })
};

const mapDispatchToProps = (dispatch) => {
        console.log('hit mdtp in tracks show container')
        // debugger;
    return ({
        fetchTrack: (key) => dispatch(fetchTrack(key)),

        fetchAnnotation: (annotation) => dispatch(fetchAnnotation(annotation)),
        createAnnotation: (annotation) => dispatch(createAnnotation(annotation)),
        updateAnnotation: (annotation) => dispatch(updateAnnotation(annotation)),
        destroyAnnotation: (annotation) => dispatch(destroyAnnotation(annotation)),
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(TracksShow)