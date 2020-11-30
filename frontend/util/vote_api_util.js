export const createVote =  (vote) => {
    return $.ajax({
       method: 'POST',
       url: '/api/votes',
       data: { vote },
    });
};

export const updateVote = (vote) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/votes/${vote.id}`,
        data: { vote },
    });
};