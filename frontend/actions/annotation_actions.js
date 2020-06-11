import * as AnnotationApiUtil from '../util/annotation_api_util'

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
    console.log('hit fetchAnnotation thunk action creator')
    debugger;
    return dispatch => {
        console.log('hit dispatch inside fetchAnnotation thunk action creator')
        debugger; 
        return AnnotationApiUtil.fetchAnnotation(annotation)
            .then(
                (annotation) => dispatch(receiveAnnotation(annotation))
            )
    }
};

export const createAnnotation = (annotation) => {
    console.log('hit createAnnotation thunk action creator')
    debugger;
    return dispatch => {
        console.log('hit dispatch inside createAnnotation thunk action creator')
        debugger; 
        return AnnotationApiUtil.createAnnotation(annotation)
            .then(
                (annotation) => dispatch(receiveAnnotation(annotation))
            )
    }
};



export const updateAnnotation = (annotation) => {
    console.log('hit dispatch inside updateAnnotation thunk action creator')
    debugger; 
    return dispatch => {
        console.log('hit dispatch inside updateAnnotation thunk action creator')
        debugger; 
        return AnnotationAPIUtil.updateAnnotation(annotation)
            .then(
                (annotation) => dispatch(receiveAnnotation(annotation))
            )
    }
};