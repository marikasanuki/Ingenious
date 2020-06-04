import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user)
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
 
        this.props.login({ username: 'localhost1', password: 'localhost1'})
            .then(() => this.props.history.push('/'));
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

            <div className='signup-headings'>
                    <span className='signup-form-header' >{this.props.formHeader}</span>
                    <br/>
                    <span className='signup-form-subhead' > {this.props.formSubhead} </span>
            </div>
                    <br />
                    <button className='session-demo-user-button' onClick={e => this.demoUser(e)}>Log in as demo user</button>
                    <br/>
                <button className='signup-username-button' onClick={e => this.handleSubmit(e)}>Sign up for new account</button>
                    <br />
                <form onSubmit={this.handleSubmit} className='signup-form-box' >
                    {this.renderErrors()}
                    <label className='signup-label' >Ingenious Nickname
                        <br />
                        <input type='text' value={this.state.username} onChange={this.handleInput('username')} className='signup-input' />
                    </label>
                    <br /><br />
                    <label className='signup-label'>Password
                        <br />
                        <input type='password' value={this.state.password} onChange={this.handleInput('password')} className='signup-input' />
                    </label>
                    <p className='signup-label' >By clicking “Create Account”, you are indicating that you have read and agree to the <a className='hyperlink-color' href="https://genius.com/static/terms" target="blank" >Terms of Service</a>.</p>
                    <input className="session-submit-button" type='submit' value={this.props.formButton} />
                    <br />
                    <br />
                    <label className='signup-label'>Already have an account? <span className='hyperlink-color' >Sign in here.</span></label>
                    {/* <label className='signup-label'>Already have an account? <a href="/login" className='hyperlink-color' >Sign in here.</a></label>
                    <label className='signup-label'>Already have an account? <Link className='hyperlink-color' to={`/login`}>Sign in here.</Link></label> */}
                </form>
            </div>
        );
    }
};

export default SignupForm;