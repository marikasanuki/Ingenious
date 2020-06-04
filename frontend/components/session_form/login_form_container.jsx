import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formButton: 'Login',
        formHeader: 'SIGN IN',
    };  
};

const mapDispatchToProps = (dispatch) => {
    return ({
        login: (user) => dispatch(login(user))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);