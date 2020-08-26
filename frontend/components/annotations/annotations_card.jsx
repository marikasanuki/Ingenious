import React from "react";
import AnnotationsFormEdit from './annotations_card_edit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import VotesShow from '../votes/votes_show_container';

class AnnotationsCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editFormVisible: null,
        }
        this.openAnnotationCardEdit = this.openAnnotationCardEdit.bind(this);
        this.hideAnnotationCardEdit = this.hideAnnotationCardEdit.bind(this);
    }

    openAnnotationCardEdit() {
        this.setState({
            editFormVisible: true,
        })
    }

    hideAnnotationCardEdit() {
        this.setState({
            editFormVisible: false,
        })
    }

    render() {

        const { currentAnnotationId } = this.props;
        const currentAnnoObj = this.props.annotations[currentAnnotationId]

        if (!currentAnnoObj) {
            return <div></div>;
        }

        const currentAnnoAuthId = currentAnnoObj.author_id

        return (
            <div className='annotation-box-container'>
                <div className='annotation-box'>
                    <div className='annotation-hed'>Ingenious Annotation</div>
                    {this.props.annotations[currentAnnotationId] ? this.props.annotations[currentAnnotationId].anno_body : null}
                    <VotesShow />
                    <div className='annotation-byline'>
                        {'Annotated by: '}
                    </div>
                    <div className='annotation-username'>
                        {this.props.track.anno_authors[currentAnnoAuthId] ? this.props.track.anno_authors[currentAnnoAuthId].username : null}
                    </div>
                    <div className="annotation-del-button-cont">
                        {(this.props.currentUser && this.props.annotations[currentAnnotationId].author_id === this.props.currentUser.id) ? (
                            <div>
                                <div
                                    className="annotation-del-button"
                                    onClick={() => {
                                        this.props.destroyAnnotation(currentAnnotationId);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                    <span
                                        className="annotation-edit-button-text"
                                    >Delete Your Annotation</span>
                                </div>
                                <div
                                    className="annotation-edit-button"
                                    onClick={() => {
                                        this.openAnnotationCardEdit();
                                    }}
                                >
                                    <FontAwesomeIcon icon={faEdit} />
                                    <span
                                        className="annotation-edit-button-text"
                                    >Edit Your Annotation</span>
                                </div>
                            </div>

                        ) : null}
                    </div>
                </div>
                {/* {this.state.editFormVisible ? */}
                    <AnnotationsFormEdit
                        updateAnnotation={this.props.updateAnnotation}
                        track={this.props.track}
                        currentAnnotationId={currentAnnotationId}
                        start_idx={this.props.start_idx}
                        end_idx={this.props.end_idx}
                        anno_body_og={this.props.annotations[currentAnnotationId].anno_body}
                        hideAnnotationCardEdit={this.hideAnnotationCardEdit}
                        hideAnnotationFormCreate={this.props.hideAnnotationFormCreate}
                        setCurrentAnnotationId={this.props.setCurrentAnnotationId}
                    />
                    {/* : null} */}
            </div>
        )
    }
};

export default AnnotationsCard;