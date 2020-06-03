import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        formType: 'Login',
        navLink: <Link to="/login">Go sign in!!!</Link>,
    };  
};

const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: (user) => dispatch(login(user))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);