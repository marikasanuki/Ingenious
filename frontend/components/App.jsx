
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import TracksIndexContainer from './tracks/tracks_index_container';
import React from "react";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBar from './nav_bar/nav_bar';
import HeaderBarContainer from './header_bar/header_bar_container';

const App = () => (
    <div className='ingenious-app' >
        <Route path="/" component={HeaderBarContainer}/>
        <Route path="/" component={NavBar} />
        <Route path="/" component={TracksIndexContainer} />
        <Route exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/login" component={LoginFormContainer} />
    </div>
);

export default App;


{/* 
        <Switch>
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
        </Switch> */}