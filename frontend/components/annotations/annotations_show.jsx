import React from "react";
import AnnotationsForm from './annotations_form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

class AnnotationsShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentAnnotationId: null,
            start_idx: null,
            end_idx: null,
            annotationCardVisible: false,
            annotationFormVisible: false,
        };
        // this.handleClick = this.handleClick.bind(this);
        this.openAnnotationCard = this.openAnnotationCard.bind(this);
        this.hideAnnotation = this.hideAnnotation.bind(this); 

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
        const lyricsElement = document.getElementsByClassName("anno-show-lyrics")[0];

        let selOffsets = this.findSelectionOffsets(lyricsElement);

        this.setState({
            annotationFormVisible: true,
            start_idx: selOffsets.start,
            end_idx: selOffsets.end,
        })
    }

    // handleClick() {
    //     openAnnotationCard()
    // }

    setCurrentAnnotationId(annotationId) {
        this.setState({ currentAnnotationId: annotationId }) //save the currentAnnotationId to local state so that onClick in the span tag for the highlighed annotation will set annotationCardVisible to true and reveal the annotationCard for the current annotation
    }

    openAnnotationCard() {
        const currentAnnoObj = this.props.annotations[this.state.currentAnnotationId]
        const currentAnnoAuthId = currentAnnoObj.author_id

        const topOffset = currentAnnoObj.start_idx; //RIGHT NOW WE'RE SETTING THE ABSOLUTE POSITION OF THIS CHILD ELE TO STARTIDX NUMBER OF PX. INSTEAD OF SETTING THE TOPOFFSET TO THAT, WE SHOULD SET IT TO THE CURRENT VIEWPORT HEIGHT

        // console.log(currentAnnoObj);
        // debugger;

        return (
            <div className='annotation-box-container'>
                <div className='annotation-box' style={{ position: 'absolute', top: topOffset + 'px' }}> {/* this needs a dynamic top: tkpx; to lower it that many pixels from its parent container (annotation-box-container) */}
                        <div className='annotation-hed'>Ingenious Annotation</div>
                            {this.props.annotations[this.state.currentAnnotationId] ? this.props.annotations[this.state.currentAnnotationId].anno_body : null } 
                        <div className='annotation-byline'>
                            {'Annotated by: '}  
                        </div>
                        <div className='annotation-username'>
                            {this.props.track.anno_authors[currentAnnoAuthId].username }
                        </div>
                        <div className="annotation-del-button-cont">
                            {(this.props.currentUser && this.props.annotations[this.state.currentAnnotationId].author_id === this.props.currentUser.id) ? (
                                <div
                                    className="annotation-del-button"
                                    onClick={() => {
                                        this.props.destroyAnnotation(this.state.currentAnnotationId);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                    <span
                                        className="annotation-del-button-text"
                                    >Delete Annotation</span>
                                </div>
                            ) : null} 
                        </div>
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
        const { lyrics, annotations, currentUser } = this.props;

        const allFormattedLyrics = [];
        const annotationsArr = Object.values(annotations);
        let prev_idx = 0;
        let uniqueKey = 0;

        for (let i = 0; i < annotationsArr.length; i++) {

            const annotation = annotationsArr[i];

            if (lyrics === undefined) { //preventing console error from attempting to slice undefined because lyrics haven't loaded
                return <div></div>
            }

            let unannotatedSlicedLyric = lyrics.slice(prev_idx, annotation.start_idx);
            
            const annotatedSlicedLyric = lyrics.slice(annotation.start_idx, annotation.end_idx)
    

            allFormattedLyrics.push(
                <span key={uniqueKey++} 
                    pos-from-top={annotation.start_idx - unannotatedSlicedLyric.length }
                    className='unannotated-lyric'
                >
                    {unannotatedSlicedLyric}
                </span>
            );

            allFormattedLyrics.push(
                <span key={uniqueKey++}
                    pos-from-top={annotation.start_idx}
                    className='highlighted-annotated-lyric'
                    onClick={() => 
                        {this.setCurrentAnnotationId(annotation.id)
                            this.state.annotationCardVisible ?
                            this.setState({ annotationCardVisible: false }) :
                            this.setState({ annotationCardVisible: true })
                        }}
                >
                    {annotatedSlicedLyric}
                </span>
            );

            prev_idx = annotation.end_idx;            

            //This is for when we're on the final iteration for the for loop
            //IF we've finished iterating over the final annotation in annotationsArr, then we want to grab the rest of the remaining unannotated lyrics and make sure they're added to the end of the allFormattedLyrics array:
            if ((i === Object.keys(annotationsArr).length - 1)  ) { 
             
                allFormattedLyrics.push(
                    <span key={uniqueKey++}
                        pos-from-top={prev_idx}
                        className='unannotated-lyric'
                    >
                        {lyrics.slice(prev_idx, lyrics.length)}
                    </span>
                )
            }   

        };


        //at this stage, once looping through annotationsArr is done, all the formatting of unannotated lyrics AND annotated lyrics has been completed and we will then return/render the formatted full lyrics string:

        if (allFormattedLyrics.length) { //if the allFormattedLyrics array has a length, there are annotations/annotated lyrics for this track. And 
            return (
                <div>
                    <div className='anno-show-lyrics-container'>

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
                            {this.state.annotationCardVisible ? this.openAnnotationCard() : this.hideAnnotation()}
                            <br />
                            {
                                currentUser ? 
                                        this.state.annotationFormVisible ?
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

                                            : this.hideAnnotation()  
                                : <div><Link to={`/login`}>Log in</Link> to leave a comment!</div>

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
                        pos-from-top={0}
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


// componentDidMount() {
//     // console.log('annotations show component mounted');
//     // document.addEventListener('click', this.handleClickOutside, true);
// }
// componentWillUnmount() {
//     // document.removeEventListener('click', this.handleClickOutside, true);
// }

