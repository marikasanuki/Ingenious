import React from "react";
import AnnotationsForm from './annotations_form';

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

        this.findSelectionOffsets = this.findSelectionOffsets.bind(this);
        this.saveOffsetsToState = this.saveOffsetsToState.bind(this);
        this.setCurrentAnnotationId = this.setCurrentAnnotationId.bind(this);
    }

    findSelectionOffsets(element) { //element is lyricsElement aka the html/jsx element containing the track's full lyrics 



        let doc = element.ownerDocument || element.document;
        let win = doc.defaultView || doc.parentWindow;

        let selected;
        let start = 0;
        let end = 0;

        if (typeof win.getSelection != "undefined") { //IF a selection/highlight has been made ...
            selected = win.getSelection();
            if (selected.rangeCount > 0) { //IF there is 1 or more ranges aka a range exists.rangeCount returns the number of ranges in the CURRENT selection. Every 
                let range = win.getSelection().getRangeAt(0); //range is a range object at index 0 of current selection
                let cloneRange = range.cloneRange(); //cloneRange is the duplicated range object at index 0 of current selection
                cloneRange.selectNodeContents(element); //sets the cloneRange to contain the contents of element. makes cloneRange's startOffset 0 and cloneRange's endOffset to the number of child Nodes in element (element is the reference node)
                
                cloneRange.setEnd(range.startContainer, range.startOffset); //setEnd sets the end position of the cloneRange. first arg is the Node inside which the cloneRange should end. second arg is an integer that represents the offset for the end of the cloneRange from the start of the first arg (the Node inside). 
 
                
                start = cloneRange.toString().length; //cloneRange.toString() returns the text of the cloneRage as a string (so .length will return the character count)
                

                
                cloneRange.setEnd(range.endContainer, range.endOffset); //setEnd sets the end position of the cloneRange. first arg is the Node inside which the cloneRange should end. second arg is an integer that represents the offset for the end of the cloneRange from the start of the first arg (the Node inside). 
                
                end = cloneRange.toString().length;
                


            }
        } else if ((selected = doc.selection) && selected.type != "Control") {
            let textRange = selected.createRange();
            let preCaretTextRange = doc.body.createTextRange();
            preCaretTextRange.moveToElementText(element);
            preCaretTextRange.setEndPoint("EndToStart", textRange);

            start = preCaretTextRange.text.length;

            preCaretTextRange.setEndPoint("EndToEnd", textRange);

            end = preCaretTextRange.text.length;
        }


        return { start: start, end: end };
    }

    saveOffsetsToState() {
        // console.log("inside saveOffsetsToState function")
        const lyricsElement = document.getElementsByClassName("anno-show-lyrics")[0];

        let selOffsets = this.findSelectionOffsets(lyricsElement);

        this.setState({
            annotationFormVisible: true,
            start_idx: selOffsets.start,
            end_idx: selOffsets.end,
        })

    }

    handleClick() {
        openAnnotation()
    }

    setCurrentAnnotationId(annotation_id) {
        this.setState({ currentAnnotationId: annotation_id })
    }

    createAnnotationForm() {
        // FORM TO CREATE A NEW ANNOTATION 
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

            if (lyrics === undefined) { //preventing console error from attempting to slice undefined because lyrics haven't loaded
                return <div></div>
            }

            let unannotatedSlicedLyric = lyrics.slice(prev_idx, annotation.start_idx);
            
            const annotatedSlicedLyric = lyrics.slice(annotation.start_idx, annotation.end_idx)
                
                        // console.log("this is start_idx: " + annotation.start_idx);
                        // console.log("this is end_idx: " + annotation.end_idx);
                        console.log("this is prev_idx: " + prev_idx);

                        console.log("unannotatedSlicedLyric: ");
                        console.log(unannotatedSlicedLyric);

                        console.log("annotatedSlicedLyric: ");
                        console.log(annotatedSlicedLyric);
                        debugger;

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

                console.log('allFormattedLyrics: ');
                console.log(allFormattedLyrics);
                debugger;

            prev_idx = annotation.end_idx;            

            //IF we've finished iterating over the final annotation in annotationsArr, then we want to grab the rest of the remaining unannotated lyrics and make sure they're added to the end of the allFormattedLyrics array:
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




        //at this stage, once looping through annotationsArr is done, all the formatting of unannotated lyrics AND annotated lyrics has been completed and we will then return/render the formatted full lyrics string:

        if (allFormattedLyrics.length) { //if the allFormattedLyrics array has a length, there are annotations/annotated lyrics for this track
            return (
                <div>
                    <div className='anno-show-lyrics-container'>

                        <div className='anno-show-mini-title'>
                            {this.props.track.title} lyrics

                        </div>


                        <div 
                            className='anno-show-lyrics'
                            onMouseDown={this.saveOffsetsToState}
                            // onMouseDown={this.handleMouseDown}
                            onMouseUp={this.saveOffsetsToState}
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
                        // pos-difference={0}
                        className='anno-show-lyrics'
                        // onMouseDown={this.handleMouseDown}
                        onMouseDown={this.saveOffsetsToState}
                        // onMouseUp={this.handleMouseUp}
                        onMouseUp={this.saveOffsetsToState}
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



        // this.handleMouseDown = this.handleMouseDown.bind(this);
        // this.handleMouseUp = this.handleMouseUp.bind(this);

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