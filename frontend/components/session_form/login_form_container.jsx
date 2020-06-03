import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formButton: 'Login',
        formHeader: 'SIGN IN',
        navMessage: `Don't have an account? Sign up here.`,
    };  
};

const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: (user) => dispatch(login(user))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);