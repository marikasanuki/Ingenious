import { connect } from "react-redux";
import VotesShow from "./votes_show";
import { createCommentVote, updateCommentVote, createAnnotationVote, updateAnnotationVote } from "../../actions/vote_actions";

const mapStateToProps = (state, ownProps) => {
    return ({
        currentCommentObj: ownProps.comment,
        currentAnnoObj: ownProps.currentAnnoObj,
        annotations: state.entities.annotations,
        comments: state.entities.comments,
        currentUser: state.session.currentUser,
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        createCommentVote: (vote) => dispatch(createCommentVote(vote)),
        updateCommentVote: (vote) => dispatch(updateCommentVote(vote)),

        createAnnotationVote: (vote) => dispatch(createAnnotationVote(vote)),
        updateAnnotationVote: (vote) => dispatch(updateAnnotationVote(vote)),
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(VotesShow)
