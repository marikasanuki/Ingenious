import { RECEIVE_ANNOTATION } from '../actions/annotation_actions'; 

const annotationsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ANNOTATION:
            // console.log('hit annotations reducer (RECEIVE_ANNOTATION)')
            // debugger;   
            return Object.assign({}, action.annotation);
        default:
            return oldState;
    }

}

export default annotationsReducer; 