import React from "react";
import AnnotationsForm from './annotations_form';
import SelectionHighlighter from "react-highlight-selection";

class AnnotationsShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            annotationVisible: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.openAnnotation = this.openAnnotation.bind(this);
        this.hideAnnotation = this.hideAnnotation.bind(this); 
        this.createAnnotationForm = this.createAnnotationForm.bind(this);

        // this.handleMouseDown = this.handleMouseDown.bind(this);
        // this.handleMouseUp = this.handleMouseUp.bind(this);

        console.log('annotationsShow constructor')
    }

        // handleMouseUp(e){
    //     this.setState({
    //         highlightUp: e.target
    //     })
    // }

    // handleMouseDown(e){
    //     this.setState({
    //         highlightDown: e.target
    //     })
    // }
    
    componentDidMount() {
        console.log('annotations show component mounted');
    }

    handleClick() {
        openAnnotation()
    }

    createAnnotationForm() {

        <div className='annotation-box-container'>
            {/* THIS CODE WILL OPEN UP THE FORM TO CREATE A NEW ANNOTATION  */ }
            <div>
                        {<AnnotationsForm 
                            track={this.props.track}
                            annotations={this.props.annotations}
                            createAnnotation={this.props.createAnnotation}            
                        />}
                    </div>  
        </div>
    }

    openAnnotation() {
        console.log("annotationsShow openAnnotation function")

        return (
        <div className='annotation-box-container'>
                <div className='annotation-box'>
                    <div className='annotation-hed'>Ingenious Annotation</div>
                    <br/>
                    {this.props.annotations[1].anno_body}
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

        // console.log(annotationsArr);

        // const { handleMouseDown, handleMouseUp } = this.props;
        for (let i = 0; i < Object.keys(annotationsArr).length; i++) {
            const annotation = annotationsArr[i];
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
                    onClick={() => currentAnnotation(annotation.id) }
                >
                    {slicedLyric}
                </span>
            );

                console.log('THIS IS allFormattedLyrics RN:');
                console.log(allFormattedLyrics);
                debugger;

            prev_idx = annotation.end_idx;

                // console.log('THIS IS lyrics RN:');
                // console.log(lyrics);               


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

                <div className='anno-show-lyrics-container'>

                    <div className='anno-show-mini-title'>
                        {this.props.track.title} lyrics
                    </div>

                    <div className='anno-show-lyrics'>{allFormattedLyrics}</div>


                    {/* <div className='anno-show-lyrics'>
                        {this.props.lyrics}
                    </div> */}



                    {/* <span className='anno-button'
                        onClick={() => this.state.annotationVisible ?
                            this.setState({ annotationVisible: false }) :
                            this.setState({ annotationVisible: true })}>
                    </span>

                    <div className='anno-show-cont'>
                        <br />
                        {this.state.annotationVisible ? this.openAnnotation() : this.hideAnnotation()}
                    </div> */}

                </div>
            )
        } else {
            return (
                <div className='anno-show-lyrics-container'>

                    <div className='anno-show-mini-title'>
                        {this.props.track.title} lyrics
                    </div>

                    <div className='anno-show-lyrics'>
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