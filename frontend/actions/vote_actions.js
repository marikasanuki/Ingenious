import * as VoteApiUtil from '../util/vote_api_util';
import { RECEIVE_COMMENT } from './comment_actions';
import { RECEIVE_ANNOTATION } from './annotation_actions';

const receiveCommentVote = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment: comment,
    };
};

const removeCommentVote = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment: comment,
    };
};

const receiveAnnotationVote = (annotation) => {
    return ({
        type: RECEIVE_ANNOTATION,
        annotation,
    });
};

const removeAnnotationVote = (annotation) => {
    return ({
        type: RECEIVE_ANNOTATION,
        annotation,
    });
};


export const createCommentVote = (vote) => {
    return dispatch => {
        return VoteApiUtil.createVote(vote)
            .then(
                (comment) => dispatch(receiveCommentVote(comment)))
    }
};

export const updateCommentVote = (vote) => {
    return dispatch => {
        return VoteApiUtil.updateVote(vote)
            .then(
                (comment) => dispatch(receiveCommentVote(comment)))
    }
};

export const destroyCommentVote = (voteId) => {
    return dispatch => {
        return VoteApiUtil.destroyVote(voteId)
            .then(
                (comment) => dispatch(removeCommentVote(comment)))
    }
};

export const createAnnotationVote = (vote) => {
    return dispatch => {
        return VoteApiUtil.createVote(vote)
            .then(
                (annotation) => dispatch(receiveAnnotationVote(annotation)))
    }
};

export const updateAnnotationVote = (vote) => {
    return dispatch => {
        return VoteApiUtil.updateVote(vote)
            .then(
                (annotation) => dispatch(receiveAnnotationVote(annotation)))
    }
};

export const destroyAnnotationVote = (voteId) => {
    return dispatch => {
        return VoteApiUtil.destroyVote(voteId)
            .then(
                (annotation) => dispatch(removeAnnotationVote(annotation)))
    }
};


