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
                <form onSubmit={this.handleSubmit} className='signup-form-box' >
                    <h1 className='signup-form-header' >{this.props.formHeader}</h1>
                    <p className='signup-form-subhead' > {this.props.formSubhead} </p>
                    <br />
                    {this.renderErrors()}
                    <label className='signup-label' >Ingenious Nickname
                        <br />
                        <input type='text' value={this.state.username} onChange={this.handleInput('username')} className='signup-input' />
                    </label>
                    <br /><br />
                    <label className='signup-label'>Password (I forgot my password)
                        <br />
                        <input type='password' value={this.state.password} onChange={this.handleInput('password')} className='signup-input' />
                    </label>
                        <p className='terms-of-service'>{this.props.termsOfService}</p>
                    <input className="session-submit-button" type='submit' value={this.props.formButton} />
                    <br />
                    <br />
                    {this.props.navMessage}
                </form>
            </div>
        );
    }
};

export default SessionForm;