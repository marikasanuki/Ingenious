import * as AnnotationAPIUtil from '../util/annotation_api_util'

export const RECEIVE_ANNOTATION = 'RECEIVE_ANNOTATION';



const receiveAnnotation = (annotation) => {
    // console.log('hit receiveAnnotation reg action creator')
    // debugger;
    return ({
        type: RECEIVE_ANNOTATION,
        annotation,
    });
};

export const fetchAnnotation = (annotation) => {
    // console.log('hit fetchAnnotation thunk action creator')
    // debugger;
    return dispatch => {
        // console.log('hit dispatch inside fetchAnnotation thunk action creator')
        // debugger; 
        return AnnotationAPIUtil.fetchAnnotation(annotation)
            .then(
                (annotation) => dispatch(receiveAnnotation(annotation))
            )
    }
};

export const createAnnotation = (annotation) => {
    return dispatch => {
        return AnnotationAPIUtil.createAnnotation(annotation)
            .then(
                (annotation) => dispatch(receiveAnnotation(annotation))
            )
    }
};



export const updateAnnotation = (annotation) => {
    return dispatch => {
        return AnnotationAPIUtil.updateAnnotation(annotation)
            .then(
                (annotation) => dispatch(receiveAnnotation(annotation))
            )
    }
};