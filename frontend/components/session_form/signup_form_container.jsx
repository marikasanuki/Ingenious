import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
    return ({  
        formButton: 'Create Account',
        formHeader: 'Sign Up',
        formSubhead: 'and show off your genius',
        navLink: `Already have an account?${<Link to="/login"> Sign in here.</Link>}`,
        termsOfService: `By clicking “Create Account”, you are indicating that you have read and agree to the ${<Link to={`https://genius.com/static/terms`}> Terms of Service</Link>}.`,
})
};

const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: (user) => dispatch(signup(user))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)