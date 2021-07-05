import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { removeErrors } from '../../actions/session_actions'

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
        removeErrors: () => dispatch(removeErrors()),
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
