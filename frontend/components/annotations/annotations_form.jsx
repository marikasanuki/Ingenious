import React from "react";

class AnnotationsForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            anno_body: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();   

        let newAnnoInfo = {
            track_id: this.props.track.id,
            start_idx: this.props.start_idx,
            end_idx: this.props.end_idx,
            anno_body: this.state.anno_body,
        }

        const anno = Object.assign({}, newAnnoInfo);

        this.props.createAnnotation(anno)
            .then (
                    (res) => {
                        return this.props.setCurrentAnnotationId(res.annotation.id)
                    }
            )
            // .then(() => this.props.history.push('/'));
            // .then(() => this.props.history.push(`/tracks/${this.props.track.id}`));
    }

    handleInput(field) {
        // console.log("anno form, inside handleInput function");   
        return (e) => {
            this.setState({
                [field]: e.target.value
            });
        };
    }

    render() { 
        // console.log("anno form, inside render function");    

        return (
            <div className='anno-form-container'>
                <div className='anno-border-bar'></div>
                <form onSubmit={this.handleSubmit} className='anno-form'>
                    <textarea 
                        className='anno-textarea'
                        placeholder="Don't just put the lyric in your own words—drop some knowledge!"
                        value={this.state.anno_body}
                        onChange={this.handleInput('anno_body')}
                        maxLength="1000" 
                    />
                    
                    {/* <input
                        type='integer'
                        value={this.props.track.id}
                        onChange={this.handleInput('track_id')}
                    /> */}
                    <br />
                    <input 
                        type='integer' 
                        value={this.props.start_idx}
                        onChange={this.handleInput('start_idx')} 
                        />
                    <br />
                    <input
                        type='integer'
                        value={this.props.end_idx}
                        onChange={this.handleInput('end_idx')}
                    />
                    <br/>
                    <input className="anno-submit-button" type='submit' value={'SAVE'}/>
                </form>
            </div>
        )
    }
};

export default AnnotationsForm;