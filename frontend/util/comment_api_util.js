export const fetchTrackComments = (trackId) => {

    return $.ajax({
        method: 'GET',
        url: `/api/tracks/${trackId}/comments`,
    });
};


export const createComment = (comment) => {

    return $.ajax({
        method: 'POST',
        url: '/api/comments',
        data: { comment },
    });

};

export const destroyComment = (commentId) => {

    return $.ajax({
        method: 'DELETE',
        url: `/api/comments/${commentId}`,
    });

};