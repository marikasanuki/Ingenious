import * as AnnotationApiUtil from '../util/annotation_api_util';

export const RECEIVE_ANNOTATION = 'RECEIVE_ANNOTATION';
export const REMOVE_ANNOTATION = 'REMOVE_ANNOTATION';

const receiveAnnotation = (annotation) => {
    console.log('hit receiveAnnotation reg action creator')
    //  debugger;
    return ({
        type: RECEIVE_ANNOTATION,
        annotation,
    });
};

const removeAnnotation = (annotation) => {
    return ({
        type: REMOVE_ANNOTATION,
        annotation,
    })
}

export const fetchAnnotation = (annotation_id) => {
    console.log('hit fetchAnnotation thunk action creator')
    //  debugger;
    return dispatch => {
        console.log('hit dispatch inside fetchAnnotation thunk action creator')
        //  debugger; 
        return AnnotationApiUtil.fetchAnnotation(annotation_id)
            .then(
                (annotation) => dispatch(receiveAnnotation(annotation))
            )
    }
};

export const createAnnotation = (annotation) => {
    console.log('hit createAnnotation thunk action creator')
    // debugger;
    return dispatch => {
        console.log('hit dispatch inside createAnnotation thunk action creator')
        //  debugger; 
        return AnnotationApiUtil.createAnnotation(annotation)
            .then(
                (annotation) => dispatch(receiveAnnotation(annotation))
            )
    }
};

export const updateAnnotation = (annotation) => {
    // console.log('hit dispatch inside updateAnnotation thunk action creator')
    //  debugger; 
    return dispatch => {
        // console.log('hit dispatch inside updateAnnotation thunk action creator')
        //  debugger; 
        return AnnotationAPIUtil.updateAnnotation(annotation)
            .then(
                (annotation) => dispatch(receiveAnnotation(annotation))
            )
    }
};

export const destroyAnnotation = (annotation_id) => {
    return dispatch => {
        return AnnotationAPIUtil.destroyAnnotation(annotation_id)
            .then(
                (annotation) => dispatch(removeAnnotation(annotation))            )
    }

};