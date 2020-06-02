import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = (currentUser) => {
    type: RECEIVE_CURRENT_USER,
    currentUser
};

const logoutCurrentUser = () => {
    type: LOGOUT_CURRENT_USER
};

export const signup = (user) => {
    return dispatch => {
        return APIUtil.signup(user)
            .then(
                (user) => {
                    return dispatch(receiveCurrentUser(user));
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