import { RECEIVE_ALL_TRACKS, RECEIVE_TRACK } from '../actions/track_actions'; 


const tracksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
  
    switch (action.type) {
        case RECEIVE_ALL_TRACKS:
            // console.log('hit tracks reducer')
            // debugger;   
            return Object.assign({}, action.tracks);
            
            // console.log(action.tracks);
            // debugger;
            // const tracks = {};
            // action.tracks.forEach(track=>{
            //     tracks[track.id] = track;
            // });
            // return tracks;
        case RECEIVE_TRACK:
            return Object.assign({}, oldState, {[action.track.id]: action.track} );
            // return Object.assign({}, oldState, action.track);
        default:
            return oldState;
    }

}

export default tracksReducer; 