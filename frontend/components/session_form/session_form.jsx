import React from 'react';

class SessionForm extends React.Component {
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
        this.props.processForm(user);
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            });
        };
    }

    render() {
        return (
            <div className='login-form-container'>
                <form onSubmit={this.handleSubmit} className='login-form' >
                    {this.props.formHeader}
                    <br />
                    {this.props.formSubhead}
                    <br />
                    <label>Ingenious Nickname
                        <br />
                        <input type='text' value={this.state.username} onChange={this.update('username')} className='login-input' />
                    </label>
                    <br /><br />
                    <label>Password (I forgot my password)
                        <br />
                        <input type='password' value={this.state.password} onChange={this.update('password')} className='login-input' />
                    </label>
                        <p className='terms-of-service'>{this.props.termsOfService}</p>
                    <input className="session-submit-button" type='submit' value={this.props.formButton} />
                    <br />
                    <br />
                    {this.props.navLink}
                </form>
            </div>
        );
    }
};

export default SessionForm;