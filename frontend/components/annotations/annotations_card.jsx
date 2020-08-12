import React from "react";

class AnnotationsCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='annotation-box-container'>
                <div className='annotation-box'>
                    <div className='annotation-hed'>Ingenious Annotation</div>
                    <br />
                    {this.props.annotations[this.state.currentAnnotationId].anno_body}
                </div>
            </div>
        )
    }
};

export default AnnotationsCard;