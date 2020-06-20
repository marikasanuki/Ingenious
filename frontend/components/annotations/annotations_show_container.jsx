import { connect } from 'react-redux';
import AnnotationsShow from './annotations_show';
import { fetchAnnotation, createAnnotation, updateAnnotation } from '../../actions/annotation_actions';

const mapStateToProps = (state, ownProps) => {
        console.log('hit mstp in annotations show container')
        debugger;
    return ({
        annotation: state.entities.annotation,
    })
};


const mapDispatchToProps = (dispatch) => {
    return ({
        fetchAnnotation: (annotation) => dispatch(fetchAnnotation(annotation)),
        createAnnotation: (annotation) => dispatch(createAnnotation(annotation)),
        updateAnnotation: (annotation) => dispatch(updateAnnotation(annotation)),
        
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(AnnotationsShow);