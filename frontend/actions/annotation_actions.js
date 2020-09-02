import * as AnnotationApiUtil from '../util/annotation_api_util';

export const RECEIVE_ANNOTATION = 'RECEIVE_ANNOTATION';
export const REMOVE_ANNOTATION = 'REMOVE_ANNOTATION';

const receiveAnnotation = (annotation) => {
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

export const fetchAnnotation = (annotationId) => {
    return dispatch => {
        return AnnotationApiUtil.fetchAnnotation(annotationId)
            .then(
                (annotation) => dispatch(receiveAnnotation(annotation))
            )
    }
};

export const createAnnotation = (annotation) => {
    return dispatch => {
        return AnnotationApiUtil.createAnnotation(annotation)
            .then(
                (annotation) => dispatch(receiveAnnotation(annotation))
            )
    }
};

export const updateAnnotation = (annotation) => {
    return dispatch => {
        return AnnotationApiUtil.updateAnnotation(annotation)
            .then(
                (annotation) => dispatch(receiveAnnotation(annotation))
            )
    }
};

export const destroyAnnotation = (annotationId) => {
    return dispatch => {
        return AnnotationApiUtil.destroyAnnotation(annotationId)
            .then(
                (annotation) => dispatch(removeAnnotation(annotation))            )
    }

};