import React from "react";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';


const App = () => (
    <div>
        <header>
            <Link to={`/`} className='header-link'>
                <h1>Ingenious :)</h1>
            </Link>
        </header>
        <LoginFormContainer />

        <br />
        <SignupFormContainer />
        {/* <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} /> */}

    </div>
);

export default App;