import React from "react";

class AnnotationsForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit (){

    }

    render() { 
        debugger
        return (
            <div className='anno-form-container' >
                <div className='anno-border-bar' ></div>
                <form onSubmit={this.handleSubmit} className='anno-form'>
                    <textarea className='anno-textarea' placeholder="Don't just put the lyric in your own words—drop some knowledge!"/>
                    <br/>
                    <input className="anno-submit-button" type='submit' value={'SAVE'}/>
                </form>
            </div>
        )
    }
};

export default AnnotationsForm;