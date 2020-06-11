import React from "react";
import { Link } from 'react-router-dom';


class AnnotationsShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            track: {
                title: '', 
                artist: '', 
                album: '',
                annotations: ["lalala", "loolooloo"],
            },
            annotationVisible: false,
            savedAnnotations: [],

        }
        this.handleClick = this.handleClick.bind(this);
        this.openAnnotation = this.openAnnotation.bind(this);
        this.hideAnnotation = this.hideAnnotation.bind(this); 
    }

    componentDidMount() {
        console.log('annotationsShow component did mount')
        debugger;
        // this.props.fetchAnnotation();
        // this.props.fetchAnnotation(this.props.track.annotation).then(data => {
        //     this.setState({savedAnnotations: data})
        // })
    };

    handleClick() {
        openAnnotation()
    }

    openAnnotation() {
        debugger;
        return (
            <div className='annotation-box-container' >
                
                <div className='annotation-box' >
                    <div className='annotation-hed' >Ingenious Annotation</div>
                    <br/>
                    {this.props.annotations[1].annotation}
                </div>

                {/* <ul className='annotation-box' >{
                        this.props.annotations.map((anno, i) =>

                        <li key={i} >
                            {anno.annotation}
                        </li>
                )}</ul> */}

                {/* <ul className='annotation-box' >{
                    this.state.track.annotations.map((ele, i) => 
                    
                    <li key={i} >
                        {ele}
                    </li>
                )}</ul> */}
            </div>
        )
    }


    hideAnnotation() {
        return (
            <div></div>
        )
    }

    render() {
        console.log('hit render function inside annotations show')
        debugger;
        // const { lyrics, handleMouseDown, handleMouseUp } = this.props;
        return (
                <div className='anno-show-lyrics-container'>
                    <div className='anno-show-mini-title' >{this.props.track.title} lyrics</div>

                    <div className='anno-show-lyrics' >{this.props.lyrics}</div>
                    <span className='anno-button-highlight'></span>   
                    <span className='anno-button'
                        onClick={() => this.state.annotationVisible ?
                            this.setState({ annotationVisible: false }) :
                            this.setState({ annotationVisible: true })}>
                        {/* Annotations */}
                    </span>
                
                                 

                     <div className='anno-show-cont' >
                        {/* <div className='tracks-show-lyrics' >{this.props.lyrics}</div>    */}
                        
                        <br />
                        {this.state.annotationVisible ? this.openAnnotation() : this.hideAnnotation() }
                    </div>
            
                </div>
        )
    }
};

export default AnnotationsShow;