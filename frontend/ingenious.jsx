import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// import * as APIUtil from './util/session_api_util';

// document.addEventListener('DOMContentLoaded', () => {

//     const root = document.getElementById('root')
//     const store = configureStore();

//     // window.getState = store.getState;
//     // window.dispatch = store.dispatch;

//     // window.login = login;
//     // window.signup = signup;
//     // window.logout = logout;

//     ReactDOM.render(<Root store={store}/>, root);

// });


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const { currentUser } = window;
        const { id } = currentUser;
        const preloadedState = {
            entitities: {
                users: {
                    [id]: currentUser
                }
            },
      session: { id }
        };
        store = configureStore(preloadedState);

        delete window.currentUser;

    } else {
        store = configureStore();
    }

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});