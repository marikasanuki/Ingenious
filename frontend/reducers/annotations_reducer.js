import { RECEIVE_ANNOTATION, REMOVE_ANNOTATION } from '../actions/annotation_actions'; 
import { RECEIVE_TRACK } from '../actions/track_actions';

const annotationsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ANNOTATION:
            // console.log('hit annotations reducer (RECEIVE_ANNOTATION)')
            //  debugger;   
            return Object.assign({}, action.annotation);
        case RECEIVE_TRACK: 
            return Object.assign({}, action.track.annotations);
        case REMOVE_ANNOTATION:
            let newState = Object.assign({}, oldState);
                console.log(action)
                debugger;   
            delete newState[action.annotation.id]
            return newState;
        default:
            return oldState;
    }
}

export default annotationsReducer; 