import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receiveCurrentUser = (currentUser) => {
    return ({
        type: RECEIVE_CURRENT_USER,
        currentUser,
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

const clearErrors = () => {
    return ({
        type: CLEAR_SESSION_ERRORS,
    })
};

export const removeErrors = () => {
    return dispatch => {
        return dispatch(clearErrors());
    };
};

export const signup = (formUser) => {
    return dispatch => {
        return APIUtil.signup(formUser)
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

export const login = (formUser) => {
    return dispatch => {
        return APIUtil.login(formUser)
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
                () => {
                    return dispatch(logoutCurrentUser());
                },
                (errors) => {
                    dispatch(receiveErrors(errors.responseJSON)
                    )
                }
            )
    }
};