import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT} from '../actions/comment_actions';
import {} from '../actions/vote_actions'

const commentsReducer = (oldState = {}, action) => {

    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            // console.log("oldState", oldState);
            let reallyNewState = Object.assign({}, oldState, {[action.comment.id]: action.comment});
            // console.log("reallyNewState", reallyNewState);
            // console.log(oldState == reallyNewState);
            // debugger;
            return reallyNewState;
        case REMOVE_COMMENT:
            let newState = Object.assign({}, oldState);
            delete newState[action.commentId]
            return newState;
        default:
            return oldState;
    };
};

export default commentsReducer;