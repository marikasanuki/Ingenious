// class AnnotationsForm extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() { 
//         debugger
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit} className='signup-form-box' >

//                     <div className='error-messages'>{this.renderErrors()}</div>

//                     <label className='signup-label' >Ingenious Nickname
//                         <br />
//                         <input type='text' value={this.state.username} onChange={this.handleInput('username')} className='signup-input' />
//                     </label>
//                     <br />
//                     <label className='signup-label'>Password
//                         <br />
//                         <input type='password' value={this.state.password} onChange={this.handleInput('password')} className='signup-input' />
//                     </label>
//                     <p className='signup-label' >By clicking “Create Account”, you are indicating that you have read and agree to the <a className='hyperlink-color' href="https://genius.com/static/terms" target="blank" >Terms of Service</a>.</p>
//                     <input className="session-submit-button" type='submit' value={this.props.formButton} />
//                     <br />
//                     <br />
//                     <label className='signup-label'>Already have an account? <Link className='hyperlink-color' to={`/login`}>Sign in here.</Link></label>
//                 </form>
//             </div>
//         )
//     }
// };

// export default AnnotationsForm;