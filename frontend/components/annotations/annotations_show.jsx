import React from "react";
import AnnotationsForm from './annotations_form';
// import SelectionHighlighter from "react-highlight-selection";
import ReactDOM from 'react-dom';

class AnnotationsShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentAnnotationId: null,
            start_idx: null,
            end_idx: null,
            highlightStart: null,
            highlightEnd: null,
            annotationVisible: false,
            annotationFormVisible: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.openAnnotation = this.openAnnotation.bind(this);
        this.hideAnnotation = this.hideAnnotation.bind(this); 
        this.createAnnotationForm = this.createAnnotationForm.bind(this);


        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);

        console.log('annotationsShow constructor')
    }
  
    handleMouseDown(e){
        console.log('inside handleMouseDown ');


        this.setState({
            highlightStart: e.target,
            annotationFormVisible: false,
            //where mouse button was first pressed down (start of mousedown event)
        })
    }

    handleMouseUp(e){
        // debugger;
        // console.log('this is window.getSelection().focusOffset):')
        // console.log(window.getSelection().focusOffset);
        // console.log('this is window.getSelection().anchorOffset:')
        // console.log(window.getSelection().anchorOffset);
        // debugger;

        let startPos = 0;
        let endPos = 0;

        if (window.getSelection().focusOffset > window.getSelection().anchorOffset) {
            startPos = window.getSelection().anchorOffset;
            endPos = window.getSelection().focusOffset;
        } else {
            startPos = window.getSelection().focusOffset;
            endPos = window.getSelection().anchorOffset;
        }

        // console.log(startPos);
        // console.log(endPos);
        // debugger;

        this.setState({
            highlightEnd: e.target,
            annotationFormVisible: true,
            start_idx: startPos,
            end_idx: endPos,
            //where mouse button was released (end of mousedown event)

        })

    }

    
    componentDidMount() {
        console.log('annotations show component mounted');
        // document.addEventListener('click', this.handleClickOutside, true);
    }
    componentWillUnmount() {
        // document.removeEventListener('click', this.handleClickOutside, true);
    }

    handleClick() {
        openAnnotation()
    }

    createAnnotationForm() {
        // THIS CODE WILL OPEN UP THE FORM TO CREATE A NEW ANNOTATION 
        return (
            // <div className='annotation-box-container'>

                <div>
                    {<AnnotationsForm
                        track={this.props.track}
                        annotations={this.props.annotations}
                        createAnnotation={this.props.createAnnotation}
                        start_idx={this.state.start_idx}
                        end_idx={this.state.end_idx}
                    />}
                </div>
            // </div>
        )
    }

    setCurrentAnnotationId(annotation_id) {
        this.setState({ currentAnnotationId: annotation_id })
    }

    openAnnotation() {
        console.log("annotationsShow openAnnotation function")

        return (
        <div className='annotation-box-container'>
                <div className='annotation-box'>
                    <div className='annotation-hed'>Ingenious Annotation</div>
                    <br/>
                    {this.props.annotations[this.state.currentAnnotationId].anno_body}
                </div>
        </div>
        )
    }

    hideAnnotation() {
        return (
            <div></div>
        )
    }

    render() {
        console.log('annotationsShow inside render function');        
        // debugger;
        const { lyrics, annotations } = this.props;
        const allFormattedLyrics = [];
        const annotationsArr = Object.values(annotations);
        let prev_idx = 0;
        let uniqueKey = 0;


        for (let i = 0; i < Object.keys(annotationsArr).length; i++) {
            const annotation = annotationsArr[i];
            // debugger;
            const slicedLyric = lyrics.slice(annotation.start_idx, annotation.end_idx)
            let unannotatedSlicedLyric = lyrics.slice(prev_idx, annotation.start_idx);
            
                // console.log('THIS IS unannotatedSlicedLyric RN:');
                // console.log(unannotatedSlicedLyric);
                // console.log('THIS IS slicedLyric RN:');
                // console.log(slicedLyric);
                // debugger;

            allFormattedLyrics.push(
                <span key={uniqueKey++} 
                    className='unannotated-lyric'
                >
                    {unannotatedSlicedLyric}
                </span>
            );

            allFormattedLyrics.push(
                <span key={uniqueKey++}
                    className='highlighted-annotated-lyric'
                    onClick={() => 
                        {this.setCurrentAnnotationId(annotation.id)
                            // this.state.annotationVisible ?
                            // this.setState({ annotationVisible: false }) :
                            this.setState({ annotationVisible: true })
                        }}
                >
                    {slicedLyric}
                </span>
            );

                // console.log('THIS IS allFormattedLyrics RN:');
                // console.log(allFormattedLyrics);
                // debugger;

            prev_idx = annotation.end_idx;            

            if (i === Object.keys(annotationsArr).length - 1) {
             
                allFormattedLyrics.push(
                    <span key={uniqueKey++}
                    className='unannotated-lyric'
                    >
                        {lyrics.slice(prev_idx, lyrics.length)}
                    </span>
                )
            }   

        };



        if (allFormattedLyrics.length) {
            return (
                <div>
                    <div className='anno-show-lyrics-container'>

                        <div className='anno-show-mini-title'>
                            {this.props.track.title} lyrics

                        </div>


                        <div 
                            className='anno-show-lyrics'
                            onMouseDown={this.handleMouseDown}
                            onMouseUp={this.handleMouseUp}
                        >
                            {allFormattedLyrics}
                        </div>
                        <div className='anno-show-cont'>
                            <br />
                            {this.state.annotationVisible ? this.openAnnotation() : this.hideAnnotation()}
                            {this.state.annotationFormVisible ? this.createAnnotationForm() : this.hideAnnotation()}
                        </div>

                    </div>


                </div>
            )
        } else {
            return (
                <div className='anno-show-lyrics-container'>

                    <div className='anno-show-mini-title'>
                        {this.props.track.title} lyrics
                    </div>

                    <div                                                      
                        className='anno-show-lyrics'
                        onMouseDown={this.handleMouseDown}
                        onMouseUp={this.handleMouseUp}
                    >
                        {this.props.lyrics}
                    </div>
                </div>
            )
        }
    }
};

export default AnnotationsShow;