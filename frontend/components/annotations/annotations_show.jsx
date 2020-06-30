import React from "react";
import AnnotationsForm from './annotations_form';
import SelectionHighlighter from "react-highlight-selection";

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
        this.selectionHandler = this.selectionHandler.bind(this);


 
    }

    componentDidMount() {
        console.log('annotationsShow component did mount')
        // debugger;
        // this.props.createAnnotation(["test"]);

        const { lyrics } = this.props;
        console.log(lyrics);            
        const text = lyrics;
                // debugger;
        return (
        <div className="anno-show-lyrics">

            <SelectionHighlighter
            text={text}
            selectionHandler={this.selectionHandler}
            customClass="custom-class"
            />
        </div>
        )
        
        // this.props.fetchAnnotation();
        // this.props.fetchAnnotation(this.props.track.annotation).then(data => {
        //     this.setState({savedAnnotations: data})
        // })
    };

    handleClick() {
        openAnnotation()
    }

    openAnnotation() {
        
        console.log("annotations show openAnnotation function")
        // debugger;
        return (


        <div className='annotation-box-container'>
                <div>
                    {<AnnotationsForm 
                        track={this.props.track}
                        annotations={this.props.annotations}
                        createAnnotation={this.props.createAnnotation}            
                    />}
                </div>  
                <div className='annotation-box'>
                    <div className='annotation-hed'>Ingenious Annotation</div>
                    <br/>
                    {this.props.annotations[this.props.track.id].annotation}
                </div>

                {/* <ul className='annotation-box'>{
                        this.props.annotations.map((anno, i) =>

                        <li key={i}>
                            {anno.annotation}
                        </li>
                )}</ul> */}

                {/* <ul className='annotation-box'>{
                    this.state.track.annotations.map((ele, i) => 
                    
                    <li key={i}>
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

    selectionHandler(selection) {
        console.log(selection);
    }

    render() {
        // console.log('hit render function inside annotations show')
        // // debugger;
        // const { lyrics, handleMouseDown, handleMouseUp } = this.props;

            const { lyrics } = this.props;

            console.log('render inside anno show');            
            const text = lyrics;
            // console.log(text);
            // console.log("test");
            // debugger;

        return (
                
                <div className='anno-show-lyrics-container'>
                    <div className='anno-show-mini-title'>
                        {this.props.track.title} lyrics
                    </div>

                    <div className='anno-show-lyrics'>
                        {this.props.lyrics}
                        {/* <SelectionHighlighter
                            text={text}
                            selectionHandler={this.selectionHandler}
                            customClass="custom-class"
                        /> */}
                    </div>
                    


                    <span className='anno-button-highlight'></span>   
                    <span className='anno-button'
                        onClick={() => this.state.annotationVisible ?
                            this.setState({ annotationVisible: false }) :
                            this.setState({ annotationVisible: true })}>
                        {/* Annotations */}
                    </span>
                
                                 

                     <div className='anno-show-cont'>
                        {/* <div className='tracks-show-lyrics'>{this.props.lyrics}</div>    */}
                        
                        <br />
                        {this.state.annotationVisible ? this.openAnnotation() : this.hideAnnotation() }
                    </div>
            
                </div>
        )
    }
};

export default AnnotationsShow;