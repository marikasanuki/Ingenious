import * as TrackAPIUtil from '../util/track_api_util'


export const RECEIVE_ALL_TRACKS = 'RECEIVE_ALL_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';


const receiveAllTracks = tracks => ({
    type: RECEIVE_ALL_TRACKS,
    tracks
});

// const receiveAllTracks = (tracks) => {
//     debugger;
//     return ({
//         type: RECEIVE_ALL_TRACKS, 
//         tracks,
//     });
// };


const receiveTrack = (track) => {
    // debugger;
    return ({
        type: RECEIVE_TRACK, 
        track,
    });
};


export const fetchTracks = () => dispatch => {
    return TrackAPIUtil.fetchTracks()
        .then(tracks => dispatch(receiveAllTracks(tracks)));
}



// export const fetchTracks = () => {
//     debugger;
//     return dispatch => {
//         return TrackAPIUtil.fetchTracks()
//             .then(
//                 (tracks) => dispatch(receiveAllTracks(tracks))
//             )
//     }
// };

export const fetchTrack = (track) => {
    // debugger;
    return dispatch => {
        return TrackAPIUtil.fetchTrack(track)
            .then(
                (track) => dispatch(receiveTrack(track))
            )
    }
};