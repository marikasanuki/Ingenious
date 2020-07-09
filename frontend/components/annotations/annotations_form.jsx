import React from "react";

class AnnotationsForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        debugger;
        this.state = {
            // id: '',
            anno_body: '',
            author_id: null,
            track_id: this.props.track.id,
            start_idx: this.props.start_idx,
            end_idx: this.props.end_idx,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e){
        e.preventDefault();
        console.log("inside handleSubmit function of anno form");        
        const anno = Object.assign({}, this.state);


        console.log(this.state);  
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
        console.log(this.props);
        console.log(this.state);

        debugger;
        return (
            <div className='anno-form-container'>
                <div className='anno-border-bar'></div>
                <form onSubmit={this.handleSubmit} className='anno-form'>
                    <textarea 
                        className='anno-textarea'
                        placeholder="Don't just put the lyric in your own words—drop some knowledge!"
                        value={this.state.anno_body}
                        onChange={this.update('anno_body')}
                    />
                    <input 
                        type='integer' 
                        value={this.state.start_idx}
                        onChange={this.update('start_idx')} 
                        />
                    <input
                        type='integer'
                        value={this.state.end_idx}
                        onChange={this.update('end_idx')}
                    />
                    
                    <br/>
                    <input className="anno-submit-button" type='submit' value={'SAVE'}/>
                </form>
            </div>
        )
    }
};

export default AnnotationsForm;