import React from "react";
import AnnotationsForm from './annotations_form';
// import SelectionHighlighter from "react-highlight-selection";

class AnnotationsShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            annotationVisible: false,
            currentAnnotationId: null,
            start_idx: null,
            end_idx: null,
            highlightStart: null,
            highlightEnd: null,
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
        this.setState({
            highlightStart: e.target
            //where mouse button was first pressed down (start of mousedown event)
        })
    }

    handleMouseUp(e){
        console.log('this is window.focusOffset():')
        console.log(window.focusOffset());
        console.log('this is window.anchorOffset():')
        console.log(window.anchorOffset());
        debugger;

        if (window.focusOffset() > window.anchorOffset()) {
            startPos = window.anchorOffset();
            endPos = window.focusOffset();
        } else {
            startPos = window.focusOffset();
            endPos = window.anchorOffset();
        }



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
    }

    handleClick() {
        openAnnotation()
    }

    createAnnotationForm() {

        return (
            <div className='annotation-box-container'>
                {/* THIS CODE WILL OPEN UP THE FORM TO CREATE A NEW ANNOTATION  */}
                <div>
                    {<AnnotationsForm
                        track={this.props.track}
                        annotations={this.props.annotations}
                        createAnnotation={this.props.createAnnotation}
                        start_idx={this.state.start_idx}
                        end_idx={this.state.end_idx}
                    />}
                </div>
            </div>
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

        // debugger;

        

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
                            this.state.annotationVisible ?
                            this.setState({ annotationVisible: false }) :
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


                        <div className='anno-show-lyrics'>{allFormattedLyrics}</div>
                        <div className='anno-show-cont'>
                            <br />
                            {this.state.annotationVisible ? this.openAnnotation() : this.hideAnnotation()}
                        </div>

                        <div >
                            {this.createAnnotationForm()}
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

                    <div                                    className='anno-show-lyrics'
                        on
                    >
                        {this.props.lyrics}
                    </div>
                </div>
            )
        }
    }
};

export default AnnotationsShow;

                  // handleMouseDown={this.handleMouseDown}
                  // handleMouseUp={this.handleMouseUp}

        // this.props.createAnnotation(this.props.match.params.id);