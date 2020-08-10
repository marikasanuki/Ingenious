import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = comments => {
    return {
        type: RECEIVE_COMMENTS,
        comments: comments,
    };
};

const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment: comment,
    };
};

const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        commentId: commentId, 
    };
};

export const fetchTrackComments = (trackId) => {
    return dispatch => {
        return CommentApiUtil.fetchTrackComments(trackId)
            .then(
                (comments) => dispatch(receiveComments(comments)));
        }
};

export const createComment = (comment) => {
    return dispatch => {    
        return CommentApiUtil.createComment(comment)
            .then(
                (comment)=> dispatch(receiveComment(comment)))
    }
};

export const destroyComment = (commentId) => {

    return dispatch => {
        return CommentApiUtil.destroyComment(commentId)
            .then(
                () => dispatch(removeComment(commentId))
            )
    }
};