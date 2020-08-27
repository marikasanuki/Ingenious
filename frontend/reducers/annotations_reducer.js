import { RECEIVE_ANNOTATION, REMOVE_ANNOTATION } from '../actions/annotation_actions'; 
import { RECEIVE_TRACK } from '../actions/track_actions';
import merge from 'lodash/merge';

const annotationsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ANNOTATION:
            //create new object, use action.annotation.id as key; action.annotation as value. 
            //then merge newly created object with oldState
            // console.log(oldState);
            // debugger;
            const ann = {
                [action.annotation.id]: action.annotation,
                // tracks.annotations[action.annotation.id]: action.annotation, 
            }
            return merge({}, oldState, ann);
            // return Object.assign({}, oldState, action.annotation);
        case RECEIVE_TRACK: 
            // debugger;
            return Object.assign({}, action.track.annotations);
        case REMOVE_ANNOTATION:
            let newState = Object.assign({}, oldState);
            delete newState[action.annotation.id]
            return newState;
        default:
            return oldState;
    }
}

export default annotationsReducer; 