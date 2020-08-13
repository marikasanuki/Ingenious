export const fetchAnnotation = (annotation) => {
    return $.ajax({
        method: 'GET',
        url: `/api/annotations/${annotation.id}`,
    });
};

export const createAnnotation = (annotation) => {
    return $.ajax({
        method: 'POST',
        url: `/api/annotations`,
        data: { annotation },
    });
};

export const updateAnnotation = (annotationId) => {
    console.log('hit updateAnnotation api util');
     debugger;
    return $.ajax({
        method: 'PATCH',
        url: `/api/annotations/${annotationId}`,
        data: { annotation },
    });
};

export const destroyAnnotation = (annotationId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/annotations/${annotationId}`,
    });
};
