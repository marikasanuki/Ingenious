import React from "react";
import AnnotationsCard from './annotations_card';
import AnnotationsFormCreate from './annotations_form_create';
import { Link } from 'react-router-dom';

class AnnotationsShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentAnnotationId: null,
            start_idx: null,
            end_idx: null,
            annotationCardVisible: false,
            annotationFormCreateVisible: false,
        };
        this.findSelectionOffsets = this.findSelectionOffsets.bind(this);
        this.saveOffsetsToState = this.saveOffsetsToState.bind(this);
        this.setCurrentAnnotationId = this.setCurrentAnnotationId.bind(this);
        this.hideAnnotationFormCreate = this.hideAnnotationFormCreate.bind(this); 

        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    handleClick() {
        if (!this.state.annotationCardVisible) {
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            annotationCardVisible: !prevState.annotationCardVisible,
        }));
    }

    handleOutsideClick(e) {
        // ignores clicks on highlighted span tag
        if (this.node.contains(e.target) && this.node) {
            return;
        }   
        this.handleClick();
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
        const lyricsElement = document.getElementsByClassName("anno-show-lyrics")[0];
        let selOffsets = this.findSelectionOffsets(lyricsElement);
        this.setState({
            start_idx: selOffsets.start,
            end_idx: selOffsets.end,
            annotationFormCreateVisible: true,
        })
    }

    setCurrentAnnotationId(annotationId) {
        this.setState({ currentAnnotationId: annotationId }) 
        //save the currentAnnotationId to local state so that onClick in the span tag for the highlighed annotation will set annotationCardVisible to true and reveal the annotationCard for the current annotation
        this.handleClick();
    }

    hideAnnotationFormCreate() {
        this.setState({
            annotationFormCreateVisible: false,
        })
    }

    render() {
        const { lyrics, annotations, currentUser } = this.props;
        const allFormattedLyrics = [];
        const annotationsArr = Object.values(annotations);
        annotationsArr.sort((a, b) => (a.start_idx < b.start_idx) ? -1 : 1); //ensures any newly created annotation is placed in the correct order in annotationsArr so that slicing of the lyrics string will happen in the correct, chronological order
        let prevIdx = 0;
        let uniqueKey = 0;

        for (let i = 0; i < annotationsArr.length; i++) {
            const annotation = annotationsArr[i];
            //preventing console error from attempting to slice undefined because lyrics haven't loaded
            if (lyrics === undefined) { 
                return <div></div>
            }
            let unannotatedSlicedLyric = lyrics.slice(prevIdx, annotation.start_idx);
            const annotatedSlicedLyric = lyrics.slice(annotation.start_idx, annotation.end_idx)
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
                    ref={node => { this.node = node; }}
                    onClick={() => 
                        {   this.setCurrentAnnotationId(annotation.id)
                        }}
                >
                    {annotatedSlicedLyric}
                </span>
            );
        //When we're on the final iteration for the for loop
        //IF we've finished iterating over the final annotation in annotationsArr, then we want to grab the rest of the remaining unannotated lyrics and make sure they're added to the end of the allFormattedLyrics array:
            if ((i === Object.keys(annotationsArr).length - 1)    ) { 
                allFormattedLyrics.push(
                    <span key={uniqueKey++}
                        className='unannotated-lyric'
                    >
                        {lyrics.slice(annotation.end_idx, lyrics.length)}
                    </span>
                )
            }   
            prevIdx = annotation.end_idx;            
        };

        //at this stage, once looping through annotationsArr is done, all the formatting of unannotated lyrics AND annotated lyrics has been completed and we will then return/render the formatted full lyrics string:
        if (allFormattedLyrics.length) { //if the allFormattedLyrics array has a length, there are annotations/annotated lyrics for this track. And 
            return (
                <div>
                    <div className='anno-show-lyrics-container'  >

                        <div className='anno-show-mini-title'>
                            {this.props.track.title} lyrics
                        </div>

                        <div 
                            className='anno-show-lyrics'
                            onMouseDown={this.saveOffsetsToState}
                            onMouseUp={this.saveOffsetsToState}
                            
                        >
                            {allFormattedLyrics}    {/* the allFormattedLyrics array of formatted span tags is rendered here. */}
                        </div>
                        <div className='anno-show-cont'>
                            <br />
                            {this.state.annotationCardVisible ? 
                                <AnnotationsCard
                                    track={this.props.track}
                                    annotations={this.props.annotations}
                                    createAnnotation={this.props.createAnnotation}
                                    currentUser={currentUser}
                                    updateAnnotation={this.props.updateAnnotation}
                                    destroyAnnotation={this.props.destroyAnnotation}

                                    start_idx={this.state.start_idx}
                                    end_idx={this.state.end_idx}
                                    currentAnnotationId={this.state.currentAnnotationId}
                                    hideAnnotationFormCreate={this.hideAnnotationFormCreate}
                                    setCurrentAnnotationId={this.setCurrentAnnotationId}
                                /> 
                                : null}
                            <br />
                                    {
                                        currentUser ? 
                                                this.state.annotationFormCreateVisible ?
                                                    <div>
                                                        {<AnnotationsFormCreate
                                                            track={this.props.track}
                                                            annotations={this.props.annotations}
                                                            createAnnotation={this.props.createAnnotation}

                                                            start_idx={this.state.start_idx}
                                                            end_idx={this.state.end_idx}
                                                            setCurrentAnnotationId={this.setCurrentAnnotationId}
                                                            hideAnnotationFormCreate={this.hideAnnotationFormCreate}
                                                        />}
                                                    </div>

                                                    : null 
                                        : 
                                            <div className='anno-login-container'>
                                                <div className='anno-login-border-bar'></div>
                                                <div className='anno-login-card' >
                                                    You need to <Link to={`/login`}>log in</Link> to add annotations to a song.
                                                </div>
                                            </div>
                                    }
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
                        className='anno-show-lyrics'
                        onMouseDown={this.saveOffsetsToState}
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






//VIEW HEIGHT ATTEMPT
// ref = { outsideClickNode => { this.outsideClickNode = outsideClickNode; }}
//saving ele ref within highlighted annotated lyric span tag
// ref = { this.highlightedTrackLyrics } //newer syntax, with React.createRef() in the constructor   
                        //ref={ele => this.highlightedTrackLyrics = ele} //older, callback version of above for non-class components