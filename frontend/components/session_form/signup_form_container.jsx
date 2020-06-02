import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
    return ({  
        formType: 'Sign up',

    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: (user) => dispatch(signup(user))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)