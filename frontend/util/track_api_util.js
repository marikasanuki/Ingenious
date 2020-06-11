export const fetchTracks = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/tracks',
    });
};

export const fetchTrack = (track) => {
    console.log('hit fetchTrack api util');
    debugger;
    return $.ajax({
        method: 'GET',
        url: `/api/tracks/${track}`,
        // url: `/api/tracks/${track.id}`,
    });
};