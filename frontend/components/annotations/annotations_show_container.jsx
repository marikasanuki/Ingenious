import { connect } from 'react-redux';
import AnnotationsShow from './annotations_show';
import { fetchAnnotation } from '../../actions/annotation_actions';

const mapStateToProps = (state, ownProps) => {
        console.log('hit mstp in annotations show container')
        debugger;
    return ({
        annotation: state.entities.annotation,
    })
};


const mapDispatchToProps = (dispatch) => {
    return ({
        fetchAnnotation: (key) => dispatch(fetchAnnotation(key))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(AnnotationsShow)