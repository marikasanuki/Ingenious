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
                annotations: ["lalala", "kakaka"],
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
        return (
            <div className='annotation-box-container' >
                
                <div className='annotation-box' >
                    <div className='annotation-hed' >Ingenious Annotation</div>
                    <br/>


                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec et odio pellentesque diam. Auctor elit sed vulputate mi. Volutpat maecenas volutpat blandit aliquam etiam erat. Molestie nunc non blandit massa enim. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Id leo in vitae turpis massa sed elementum tempus egestas. Urna id volutpat lacus laoreet non curabitur. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Pellentesque massa placerat duis ultricies lacus sed. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus.
                </div>
                <ul className='annotation-box' >{
                    this.state.track.annotations.map((ele, i) => 
                    
                    <li key={i} >
                        {ele}
                    </li>
                )}</ul>
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
        console.log(this.props);
        debugger;
        // const { lyrics, handleMouseDown, handleMouseUp } = this.props;
        return (
            <div>
                {/* <div className='tracks-show-lyrics' >{this.props.lyrics}</div>    */}
                <div className='anno-button' 
                    onClick={() => this.state.annotationVisible ? 
                        this.setState({ annotationVisible: false }) : 
                        this.setState({ annotationVisible: true })}>
                        Open Annotation
                </div>
                <br />
                {this.state.annotationVisible ? this.openAnnotation() : this.hideAnnotation() }
            </div>
        )
    }
};

export default AnnotationsShow;