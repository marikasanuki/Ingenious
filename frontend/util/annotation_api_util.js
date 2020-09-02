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

export const updateAnnotation = (annotation) => {
    console.log('hit updateAnnotation api util');
    return $.ajax({
        method: 'PATCH',
        url: `/api/annotations/${annotation.id}`,
        data: { annotation },
    });
};

export const destroyAnnotation = (annotationId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/annotations/${annotationId}`,
    });
};
