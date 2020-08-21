import React from "react";

class AnnotationsFormEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            anno_body: this.props.anno_body_og,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();   

        let updatedAnnoInfo = {
            track_id: this.props.track.id,
            start_idx: this.props.start_idx,
            end_idx: this.props.end_idx,
            anno_body: this.state.anno_body,
            id: this.props.currentAnnotationId,
        }

        const anno = Object.assign({}, updatedAnnoInfo);

        this.props.updateAnnotation(anno)
        //updates annotation w/in database but it then deletes old annotation from DOM/array
            .then (
               () => this.props.hideAnnotationForm()
            )            
            // .then (
            //     (res) => {
            //         return this.props.setCurrentAnnotationId(res.annotation.id)
            //     }
            // )
    }

    handleInput(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value
            });
        };
    }

    render() { 
        return (
            <div className='anno-form-container-edit'>
                <div className='anno-border-bar-edit'></div>
                <form onSubmit={this.handleSubmit} className='anno-form-edit'>
                    <textarea 
                        className='anno-textarea-edit'
                        value={this.state.anno_body}
                        onChange={this.handleInput('anno_body')}
                        maxLength="1000" 
                    />
                    <input className="anno-submit-button-edit" type='submit' value={'UPDATE'}/>

                </form>
            </div>
        )
    }
};

export default AnnotationsFormEdit;