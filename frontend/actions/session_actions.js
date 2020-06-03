import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


const receiveCurrentUser = (currentUser) => {
    return ({
        type: RECEIVE_CURRENT_USER,
        currentUser: currentUser,
    });
};

const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_CURRENT_USER,
    });
};

const receiveErrors = (errors) => {
    return ({
        type: RECEIVE_SESSION_ERRORS,
        errors,
    });
};

export const signup = (user) => {
    return dispatch => {
        return APIUtil.signup(user)
            .then(
                (user) => {
                    return dispatch(receiveCurrentUser(user));
                }, 
                (errors) => { 
                    dispatch(receiveErrors(errors.responseJSON)
                    )
                    // console.log(errors); - errors is entire errors object (want to only send the array of the responseJSON
                } 

            )
    }
};

export const login = (user) => {
    return dispatch => {
        return APIUtil.login(user)
            .then(
                (user) => {
                    return dispatch(receiveCurrentUser(user));
                },
                (errors) => {
                    dispatch(receiveErrors(errors.responseJSON)
                    )
                } 
            )
    }
};

export const logout = () => {
    return dispatch => {
        return APIUtil.logout()
            .then(
                (user) => {
                    return dispatch(logoutCurrentUser());
                }
            )
    }
};