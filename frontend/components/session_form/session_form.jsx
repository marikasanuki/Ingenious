import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        debugger;
        this.state = {
            username: '',
            password: ''
        };
        console.log(this.props);
        debugger;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            })
        };
    }

    render() {
        return (
            <div className='login-form-container'>
                <form onSubmit={this.handleSubmit} className='login-form' >
                    {this.props.formType} or {this.props.navLink}
                    <br /><br />
                    <label>Ingenious Nickname
                        <br />
                        <input type='text' value={this.state.username} onChange={this.update('username')} className='login-input' />
                    </label>
                    <br /><br />
                    <label>Password
                        <br />
                        <input type='password' value={this.state.password} onChange={this.update('password')} className='login-input' />
                    </label>
                    <p className='terms-of-service'>By clicking “Create Account”, you are indicating that you have read and agree to the Terms of Service.</p>
                    <input className="session-submit-button" type='submit' value={this.props.formType} />
                </form>
            </div>
        );
    }
};

export default SessionForm;