import * as TrackAPIUtil from '../util/track_api_util'


export const RECEIVE_ALL_TRACKS = 'RECEIVE_ALL_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';


const receiveAllTracks = tracks => ({
    type: RECEIVE_ALL_TRACKS,
    tracks
});

// const receiveAllTracks = (tracks) => {
//     return ({
//         type: RECEIVE_ALL_TRACKS, 
//         tracks,
//     });
// };


const receiveTrack = (track) => {
    console.log('hit receiveTrack reg action creator')
     debugger;
    return ({
        type: RECEIVE_TRACK, 
        track,
    });
};


export const fetchTracks = () => {
    // console.log('hit fetchTracks action')
    //  debugger;
    return dispatch => {
        return TrackAPIUtil.fetchTracks()
            .then((tracks) => {
                return dispatch(receiveAllTracks(tracks))
            })
    }
};

export const fetchTrack = (track) => {
    // console.log('hit fetchTrack thunk action creator')
    //  debugger;
    return dispatch => {
        // console.log('hit dispatch inside fetchTrack thunk action creator')
        //  debugger; 
        return TrackAPIUtil.fetchTrack(track)
            .then(
                (track) => dispatch(receiveTrack(track))
            )
    }
};