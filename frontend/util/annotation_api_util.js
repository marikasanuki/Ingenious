export const fetchAnnotation = (annotation) => {
    // console.log('hit fetchAnnotation api util');
    // debugger;
    return $.ajax({
        method: 'GET',
        url: `/api/tracks/:track_id/annotations/${annotation.id}`,
    });
};


export const createAnnotation = (annotation) => {
    // console.log('hit createAnnotation api util');
    // debugger;
    return $.ajax({
        method: 'POST',
        url: `/api/tracks/:track_id/annotations`,
        data: { annotation }
    });
};


export const updateAnnotation = (annotation) => {
    // console.log('hit updateAnnotation api util');
    // debugger;
    return $.ajax({
        method: 'PATCH',
        url: `/api/tracks/:track_id/annotations/${annotation.id}`,
        data: { annotation }
    });
};


export const destroyAnnotation = (annotation) => {
    // console.log('hit destroyAnnotation api util');
    // debugger;
    return $.ajax({
        method: 'DELETE',
        url: `/api/tracks/:track_id/annotations/${annotation.id}`,
    });
};
