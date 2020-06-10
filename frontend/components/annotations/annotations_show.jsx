// import React from "react";
// import { Link } from 'react-router-dom';

// class AnnotationsShow extends React.Component {
//     constructor(props) {
//         super(props);

//         this.openDropdown = this.openDropdown.bind(this);
//         this.closeDropdown = this.closeDropdown.bind(this);
//     }

//     openDropdown() {
//         return (
//             <form onSubmit={this.handleSubmit} className='signup-form-box' >

//                 <div className='error-messages'>{this.renderErrors()}</div>

//                 <label className='signup-label' >Ingenious Nickname
//                         <br />
//                     <input type='text' value={this.state.username} onChange={this.handleInput('username')} className='signup-input' />
//                 </label>
//                 <br />
//                 <label className='signup-label'>Password
//                         <br />
//                     <input type='password' value={this.state.password} onChange={this.handleInput('password')} className='signup-input' />
//                 </label>
//                 <p className='signup-label' >By clicking “Create Account”, you are indicating that you have read and agree to the <a className='hyperlink-color' href="https://genius.com/static/terms" target="blank" >Terms of Service</a>.</p>
//                 <input className="session-submit-button" type='submit' value={this.props.formButton} />
//                 <br />
//                 <br />
//                 <label className='signup-label'>Already have an account? <Link className='hyperlink-color' to={`/login`}>Sign in here.</Link></label>
//             </form>
//         )
//     }


//     closeDropdown() {
//         return (
//             <div></div>
//         )
//     }

//     render() {
//         return (
//             <div>

//                 <button className='signup-username-button' onClick={() => this.state.dropdownVisible ? this.setState({ dropdownVisible: false }) : this.setState({ dropdownVisible: true })}><FontAwesomeIcon icon={faEnvelope} /> &nbsp;Sign up for new account</button>
//                 <br />
//                 {this.state.dropdownVisible ? this.openDropdown() : this.closeDropdown()}
//             </div>
//         )
//     }
// };

// export default AnnotationsShow;