import { RECEIVE_ALL_TRACKS, RECEIVE_TRACK } from '../actions/track_actions';


const tracksReducer = (oldState = {}, action) => {

    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ALL_TRACKS:
            return Object.assign({}, action.tracks);
        case RECEIVE_TRACK:
            return Object.assign({}, action.track);
        default:
            return oldState;
    }
}

export default tracksReducer;
