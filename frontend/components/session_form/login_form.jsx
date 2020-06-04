import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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


    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className='signup-form-container'>
                    <div className='signup-form-header' >{this.props.formHeader}</div>
                <form onSubmit={this.handleSubmit} className='signup-form-box' >
                    <div className='error-messages'>{this.renderErrors()}</div>
                    <label className='signup-label' >Ingenious Nickname
                        <br />
                        <input type='text' value={this.state.username} onChange={this.handleInput('username')} className='signup-input' />
                    </label>
                    <br /><br />
                    <label className='signup-label'>Password <a className='hyperlink-color' href='https://genius.com/password_resets/new' target="blank" >(I forgot my password)</a>
                        <br />
                        <input type='password' value={this.state.password} onChange={this.handleInput('password')} className='signup-input' />
                    </label>
                        <p className='terms-of-service'>{this.props.termsOfService}</p>
                    <input className="session-submit-button" type='submit' value={this.props.formButton} />
                    <br />
                    <br />
                    <label className='signup-label'>Don't have an account? <Link className='hyperlink-color' to={`/signup`}>Sign up here.</Link></label>
                    
                </form>
            </div>
        );
    }
};

export default LoginForm;