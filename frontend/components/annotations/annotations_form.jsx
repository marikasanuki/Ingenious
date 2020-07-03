import React from "react";

class AnnotationsForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        debugger;
        this.state = {

            id: '',
            annotation: '',
            author_id: 1,
            track_id: 1,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e){
        e.preventDefault();
        console.log("inside handleSubmit function of anno form");        
        const anno = Object.assign({}, this.state);
         debugger;
        this.props.createAnnotation(anno)
            .then(() => this.props.history.push(`/tracks/${this.state.track_id}`));
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value
            });
        };
    }

    render() { 
        // console.log(this.props)
         debugger
        return (
            <div className='anno-form-container'>
                <div className='anno-border-bar'></div>
                <form onSubmit={this.handleSubmit} className='anno-form'>
                    <textarea className='anno-textarea' placeholder="Don't just put the lyric in your own words—drop some knowledge!"
                    value={this.state.annotation}
                    onChange={this.update('annotation')}

                    
                    
                    />
                    <br/>
                    <input className="anno-submit-button" type='submit' value={'SAVE'}/>
                </form>
            </div>
        )
    }
};

export default AnnotationsForm;