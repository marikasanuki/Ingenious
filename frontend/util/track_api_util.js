export const fetchTracks = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/tracks',
    });
};

export const fetchTrack = (track) => {
    return $.ajax({
        method: 'GET',
        url: `/api/tracks/${track}`,
    });
};