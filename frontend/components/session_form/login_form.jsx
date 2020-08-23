import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user)
            .then(() => this.props.history.push('/'));
    }

    handleInput(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            });
        };
    }
    demoUser(e) {
        e.preventDefault();
        //  debugger;
        this.props.login({ username: 'IngeniousFan', password: 'IngeniousFanpw' })
            .then(() => this.props.history.push('/'));
    }

    renderErrors() {
        return (
            <div>
                <div className='error-whoops-hed' >Whoops</div>
                <div className='error-whoops-subhed' >There must be some mistake</div>
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    render() {
        return (
            <div className='signup-form-container'>
                    <div className='signup-form-header' >{this.props.formHeader}</div>
                <form onSubmit={this.handleSubmit} className='signup-form-box' >
                    {this.props.errors.length ? <div className='error-messages'>{this.renderErrors()}</div> : null}
                    <label className='signup-label' >Ingenious Nickname
                        <br />
                        <input 
                            type='text' 
                            value={this.state.username} 
                            onChange={this.handleInput('username')} 
                            className='signup-input'
                            maxLength="30" 
                        />
                    </label>
                    <br />
                    <label className='signup-label'>Password <a className='hyperlink-color' href='https://genius.com/password_resets/new' target="blank" >(I forgot my password)</a>
                        <br />
                        <input 
                            type='password' 
                            value={this.state.password} 
                            onChange={this.handleInput('password')} 
                            className='signup-input' 
                            maxLength="70"
                        />
                    </label>
                        <p className='terms-of-service'>{this.props.termsOfService}</p>
                    <input className="session-submit-button" type='submit' value={this.props.formButton} />
                    <br />
                    <br />
                    <label className='signup-label'>Don't have an account? <Link className='hyperlink-color' to={`/signup`}>Sign up here.</Link></label>
                    
                    <button className='login-demo-user-button' onClick={e => this.demoUser(e)}><FontAwesomeIcon icon={faUser} /> &nbsp;Log in as demo user</button>
                </form>
            </div>
        );
    }
};

export default LoginForm;