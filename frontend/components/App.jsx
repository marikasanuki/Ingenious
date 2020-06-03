
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import React from "react";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

const App = () => (
    <div className='ingenious-app' >
        <header>
            <Link to={`/`} className='ingenious-header'><h2>INGENIOUS</h2></Link>
        </header>
            <Link to={`/`} className='ingenious-navbar' ><h4 >NavBar placeholder</h4></Link>
        <SignupFormContainer />
        <br />
        <br />
        <br />
        <LoginFormContainer />
        {/* <Route path="/signup" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} /> */}

    </div>
);

export default App;