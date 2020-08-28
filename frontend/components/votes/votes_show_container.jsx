import { connect } from 'react-redux';
import VotesShow from './votes_show';
import { createCommentVote, updateCommentVote, destroyCommentVote, createAnnotationVote, updateAnnotationVote, destroyAnnotationVote } from '../../actions/vote_actions';

const mapStateToProps = (state, ownProps) => {
    // console.log('state: ')
    // console.log(state)
    // console.log('ownProps: ')
    // console.log(ownProps);
    // debugger;
    return ({
        
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        createCommentVote: (vote) => dispatch(createCommentVote(vote)),
        updateCommentVote: (vote) => dispatch(updateCommentVote(vote)),
        destroyCommentVote: (voteId) => dispatch(destroyCommentVote(voteId)),

        createAnnotationVote: (vote) => dispatch(createAnnotationVote(vote)),
        updateAnnotationVote: (vote) => dispatch(updateAnnotationVote(vote)),
        destroyAnnotationVote: (voteId) => dispatch(destroyAnnotationVote(voteId)),
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(VotesShow)