import React from "react";
import { Link } from 'react-router-dom';

class AnnotationsShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            annotationVisible: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.openAnnotation = this.openAnnotation.bind(this);
        this.hideAnnotation = this.hideAnnotation.bind(this);
    }

    handleClick() {
        openAnnotation()
    }

    openAnnotation() {
        return (
            <div className='annotation-box' >annotation goes here</div>
        )
    }


    hideAnnotation() {
        return (
            <div></div>
        )
    }

    render() {
        debugger;
        return (
            <div>
                <button className='anno-button' 
                    onClick={() => this.state.annotationVisible ? 
                        this.setState({ annotationVisible: false }) : 
                        this.setState({ annotationVisible: true })}>
                        Open Annotation
                </button>
                <br />
                {this.state.annotationVisible ? this.openAnnotation() : this.hideAnnotation() }
            </div>
        )
    }
};

export default AnnotationsShow;