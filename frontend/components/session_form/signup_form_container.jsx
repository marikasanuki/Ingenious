import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

import { Link } from 'react-router-dom';

const mapStateToProps = ({ errors }) => {
    return ({  
        errors: errors.session,
        formButton: 'Create Account',
        formHeader: 'Sign Up',
        formSubhead: 'and show off your genius',
        navMessage: `Already have an account? Sign in here.`,
        termsOfService: `By clicking “Create Account”, you are indicating that you have read and agree to the Terms of Service.`,
})
};

const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: (user) => dispatch(signup(user))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)