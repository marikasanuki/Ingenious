import React from "react";
import AnnotationsForm from './annotations_form';
import ReactDOM from 'react-dom';

class AnnotationsShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentAnnotationId: null,
            start_idx: null,
            end_idx: null,
            annotationVisible: false,
            annotationFormVisible: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.openAnnotation = this.openAnnotation.bind(this);
        this.hideAnnotation = this.hideAnnotation.bind(this); 
        this.createAnnotationForm = this.createAnnotationForm.bind(this);
        // this.handleMouseDown = this.handleMouseDown.bind(this);
        // this.handleMouseUp = this.handleMouseUp.bind(this);

        this.selectionOffsets = this.selectionOffsets.bind(this);
        this.reportSelection = this.reportSelection.bind(this);
        this.setCurrentAnnotationId = this.setCurrentAnnotationId.bind(this);
    }


    reportSelection() {
        // console.log("inside reportSelection function")
        const lyricsElement = document.getElementsByClassName("anno-show-lyrics")[0];

        let selOffsets = this.selectionOffsets(lyricsElement);

        this.setState({

            annotationFormVisible: true,
            start_idx: selOffsets.start,
            end_idx: selOffsets.end,

        })

        // console.log(selOffsets); 
        // console.log(selOffsets.start, selOffsets.end);
        // debugger;
    }

    selectionOffsets(element) { //element is lyricsElement aka the html/jsx element containing the track's full lyrics 
        let start = 0;
        let end = 0;
        let doc = element.ownerDocument || element.document;
        let win = doc.defaultView || doc.parentWindow;
        let sel;
        if (typeof win.getSelection != "undefined") { //IF a selection/highlight has been made ...
            sel = win.getSelection();
            if (sel.rangeCount > 0) { //IF there is 1 or more ranges aka a range exists.rangeCount returns the number of ranges in the CURRENT selection. Every 
                let range = win.getSelection().getRangeAt(0); //range is a range object at index 0 of current selection
                let cloneRange = range.cloneRange(); //cloneRange is the duplicated range object at index 0 of current selection
                cloneRange.selectNodeContents(element); 
                cloneRange.setEnd(range.startContainer, range.startOffset);

                start = cloneRange.toString().length;
                
                cloneRange.setEnd(range.endContainer, range.endOffset);

                end = cloneRange.toString().length;
            }
        } else if ((sel = doc.selection) && sel.type != "Control") {
            let textRange = sel.createRange();
            let preCaretTextRange = doc.body.createTextRange();
            preCaretTextRange.moveToElementText(element);
            preCaretTextRange.setEndPoint("EndToStart", textRange);

            start = preCaretTextRange.text.length;

            preCaretTextRange.setEndPoint("EndToEnd", textRange);

            end = preCaretTextRange.text.length;
        }
        return { start: start, end: end };
    }

    handleClick() {
        openAnnotation()
    }

    setCurrentAnnotationId(annotation_id) {
        this.setState({ currentAnnotationId: annotation_id })
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
                        setCurrentAnnotationId={this.setCurrentAnnotationId}
                    />}
                </div>
            // </div>
        )
    }


    openAnnotation() {
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
        // console.log('annotationsShow inside render function');        
        const { lyrics, annotations } = this.props;
        const allFormattedLyrics = [];
        const annotationsArr = Object.values(annotations);
        let prev_idx = 0;
        let uniqueKey = 0;

        // console.log("annotations is: ");
        // console.log(annotations);
        // console.log("annotationsArr (individual track's annotations' values) is: ");
        // console.log('this is this.props: ')
        // console.log(this.props);
        // console.log (annotationsArr);
        // debugger;

        for (let i = 0; i < annotationsArr.length; i++) {

            const annotation = annotationsArr[i];
            let unannotatedSlicedLyric = lyrics.slice(prev_idx, annotation.start_idx);
            const annotatedSlicedLyric = lyrics.slice(annotation.start_idx, annotation.end_idx)
            
            // console.log("this is start_idx: " + annotation.start_idx);
            // console.log("this is end_idx: " + annotation.end_idx);
            // console.log("this is prev_idx: " + prev_idx);

            // console.log("unannotatedSlicedLyric: ");
            // console.log(unannotatedSlicedLyric);

            // console.log("annotatedSlicedLyric: ");
            // console.log(annotatedSlicedLyric);
            // debugger;

            allFormattedLyrics.push(
                <span key={uniqueKey++} 
                    pos-difference={prev_idx}
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
                    {annotatedSlicedLyric}
                </span>
            );

                // console.log('allFormattedLyrics: ');
                // console.log(allFormattedLyrics);
                // debugger;

            prev_idx = annotation.end_idx;            

            if (i === Object.keys(annotationsArr).length - 1) {
             
                allFormattedLyrics.push(
                    <span key={uniqueKey++}
                        pos-difference={prev_idx}
                        className='unannotated-lyric'
                    >
                        {lyrics.slice(prev_idx, lyrics.length)}
                    </span>
                )
            }   

        };




        //at this stage, all the formatting of unannotated lyrics AND annotated lyrics has been completed and we will then return/render the formatted full lyrics string:

        if (allFormattedLyrics.length) { //if the allFormattedLyrics array has a length, there are annotations/annotated lyrics for this track
            return (
                <div>
                    <div className='anno-show-lyrics-container'>

                        <div className='anno-show-mini-title'>
                            {this.props.track.title} lyrics

                        </div>


                        <div 
                            className='anno-show-lyrics'
                            onMouseDown={this.reportSelection}
                            // onMouseDown={this.handleMouseDown}
                            onMouseUp={this.reportSelection}
                            // onMouseUp={this.handleMouseUp}
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
        } else { //if allFormattedLyrics array is empty, there are no annotations on this track to render, so just return the full lyrics string via this.props.lyrics
            return (
                <div className='anno-show-lyrics-container'>

                    <div className='anno-show-mini-title'>
                        {this.props.track.title} lyrics
                    </div>

                    <div                                                      
                        pos-difference={0}
                        className='anno-show-lyrics'
                        // onMouseDown={this.handleMouseDown}
                        onMouseDown={this.reportSelection}
                        // onMouseUp={this.handleMouseUp}
                        onMouseUp={this.reportSelection}
                    >
                        {this.props.lyrics}
                    </div>
                </div>
            )
        }
    }
};

export default AnnotationsShow;


// componentDidMount() {
//     // console.log('annotations show component mounted');
//     // document.addEventListener('click', this.handleClickOutside, true);
// }
// componentWillUnmount() {
//     // document.removeEventListener('click', this.handleClickOutside, true);
// }



// handleMouseDown(e){
//     this.setState({
//         // highlightStart: e.target,
//         currentAnnotationId: null,
//         annotationVisible: false,
//         annotationFormVisible: false,
//         //where mouse button was first pressed down (start of mousedown event)
//     })
// }

// handleMouseUp(e){
//     let startPos = 0;
//     let endPos = 0;

//     if (window.getSelection().focusOffset > window.getSelection().anchorOffset) {
//         startPos = window.getSelection().anchorOffset;
//         endPos = window.getSelection().focusOffset;
//     } else {
//         startPos = window.getSelection().focusOffset;

//         endPos = window.getSelection().anchorOffset;
//     }

//     this.setState({
//         // highlightEnd: e.target,
//         annotationFormVisible: true,
//         start_idx: startPos,
//         end_idx: endPos,
//         //where mouse button was released (end of mousedown event)
//     })
// }