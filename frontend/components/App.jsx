
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
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './home/home';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
    <div className='ingenious-app' >
        <header>
            <Link to={`/`} className='ingenious-header'><h2>INGENIOUS</h2></Link>
        </header>
        <Route exact path="/" component={NavBarContainer} />
            {/* <Link to={`/`} className='ingenious-navbar' ><h4 >NavBar placeholder</h4></Link> */}
        <br />
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/login" component={LoginFormContainer} />

{/* 
        <Switch>
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
        </Switch> */}

    </div>
);

export default App;