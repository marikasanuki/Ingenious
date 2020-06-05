import { connect } from 'react-redux';
import React from 'react';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';

import { Link } from 'react-router-dom';

const mapStateToProps = ({ errors }) => {
    return ({  
        errors: errors.session,
        formHeader: 'SIGN UP',
        formSubhead: 'and show off your ingenious',
        formButton: 'Create Account',
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        signup: (user) => {
            return dispatch(signup(user))},
        login: (user) => dispatch(login(user)),
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)