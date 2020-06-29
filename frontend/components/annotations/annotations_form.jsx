import React from "react";

class AnnotationsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            // id: this.props.annotation.id,
            // annotation: '',
            // author_id: this.props.annotation.author_id,
            // track_id: this.props.annotation.track_id,
        }


        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e){
        e.preventDefault();
        console.log("inside handleSubmit function of anno form");
        console.log(e.target.value);
        debugger;
        const anno = Object.assign({}, this.state);
        // debugger;
        this.props.createAnnotation(anno)
            .then(() => this.props.history.push('/'));
    }

    render() { 
        console.log(this.props)
        // debugger
        return (
            <div className='anno-form-container'>
                <div className='anno-border-bar'></div>
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