import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons'

class VotesShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thumbUpColor: "gray",
            thumbDownColor: "gray",
        };
        this.handleThumbUpCommentClick = this.handleThumbUpCommentClick.bind(this);
        this.handleThumbDownCommentClick = this.handleThumbDownCommentClick.bind(this);
        this.handleThumbUpAnnoClick = this.handleThumbUpAnnoClick.bind(this);
        this.handleThumbDownAnnoClick = this.handleThumbDownAnnoClick.bind(this);
        this.tallyCurrentCommentObjVotes = this.tallyCurrentCommentObjVotes.bind(this);
        this.tallyCurrentAnnoObjVotes = this.tallyCurrentAnnoObjVotes.bind(this);
    }

    componentDidMount() {
        if (this.props.currentCommentObj) {
            this.tallyCurrentCommentObjVotes();
        } else if (this.props.currentAnnoObj) {
            this.tallyCurrentAnnoObjVotes();
        }
    }

    handleThumbUpCommentClick() {

        //no currentUser / not logged in
        if (!this.props.currentUser) {
            return null;
        }
        
        const allVotesArr = this.props.currentCommentObj.all_votes

        for (let i = 0; i < allVotesArr.length; i++) {
            const currentVote = allVotesArr[i];

            //currentUser has upvote clicked so currentVote.value === 1
            // update vote: set vote.value to 0 in db
            // change thumb color to gray
            if (currentVote.author_id === this.props.currentUser.id && currentVote.value === 1) {
                let updatedVoteObj = {
                    value: 0, 
                    author_id: currentVote.author_id, 
                    votable_type: 'Comment',
                    votable_id: this.props.currentCommentObj.id,
                    id: currentVote.id,
                }
                
                const vote = Object.assign({}, updatedVoteObj);

                return this.props.updateCommentVote(vote)
                    .then(
                        this.setState({
                            thumbUpColor: 'gray',
                            thumbDownColor: 'gray',
                        })
                    );

            //currentUser has downvote clicked so currentVote.value === -1
            // update vote: set vote.value to 1 in db
            // change thumb color to green
            } 
            else if (currentVote.author_id === this.props.currentUser.id && currentVote.value === -1) {

                let updatedVoteObj = {
                    value: 1,
                    author_id: currentVote.author_id,
                    votable_type: 'Comment',
                    votable_id: this.props.currentCommentObj.id,
                    id: currentVote.id,
                }
                const vote = Object.assign({}, updatedVoteObj);
                return this.props.updateCommentVote(vote)
                    .then(
                        this.setState({
                            thumbUpColor: 'rgb(84, 200, 53)', //green
                            thumbDownColor: 'gray', 
                        })
                    );

            //currentUser has voted in the past but has unclicked buttons so currentVote.value === 0
            // update vote: set vote.value to 1 in db
            // change thumb color to green
            } else if ( currentVote.author_id === this.props.currentUser.id && currentVote.value === 0 ) { 
                let updatedVoteObj = {
                    value: 1,
                    author_id: currentVote.author_id,
                    votable_type: 'Comment',
                    votable_id: this.props.currentCommentObj.id,
                    id: currentVote.id,
                }
                const vote = Object.assign({}, updatedVoteObj);
                return this.props.updateCommentVote(vote)
                    .then(
                        this.setState({
                            thumbUpColor: 'rgb(84, 200, 53)', //green
                            thumbDownColor: 'gray',
                        })
                    )
                    } 
        }

        //IF NOTHING CLICKED YET EVER—CREATE NEW VOTE AFTER EVERY ELEMENT IN ALL VOTES ARRAY IS CHECKED FOR CURRENT USER ID
        // create new vote and set vote.value to 1 in db
        // change thumb color to green
        let newVoteObj = {
            value: 1,
            author_id: this.props.currentUser.id,
            votable_type: 'Comment',
            votable_id: this.props.currentCommentObj.id,
        }
        const vote = Object.assign({}, newVoteObj);
        return this.props.createCommentVote(vote)
                    .then(
                        this.setState({
                            thumbUpColor: 'rgb(84, 200, 53)', //green
                            thumbDownColor: 'gray', 
                        }));
    }
    
    handleThumbDownCommentClick() {

        //no currentUser / not logged in
        if (!this.props.currentUser) {
            return null;
        }

        const allVotesArr = this.props.currentCommentObj.all_votes

        for (let i = 0; i < allVotesArr.length; i++) {
            const currentVote = allVotesArr[i];

            // if currentuser id IS in array && vote.value is 1
            // update vote: set vote.value to - 1 in db
            // change thumb color to red
            if (currentVote.author_id === this.props.currentUser.id && currentVote.value === 1) {
                let updatedVoteObj = {
                    value: -1,
                    author_id: currentVote.author_id,
                    votable_type: 'Comment',
                    votable_id: this.props.currentCommentObj.id,
                    id: currentVote.id,
                }

                const vote = Object.assign({}, updatedVoteObj);
                return this.props.updateCommentVote(vote)
                    .then(
                        this.setState({
                            thumbUpColor: 'gray', //red
                            thumbDownColor: 'rgb(234, 43, 36)', //red
                        })
                    )

            // if currentuser id IS in array && vote.value is - 1
            // update vote: set vote.value to 0 in db
            // change thumb color to gray
            }
            else if (currentVote.author_id === this.props.currentUser.id && currentVote.value === -1) {
                let updatedVoteObj = {
                    value: 0,
                    author_id: currentVote.author_id,
                    votable_type: 'Comment',
                    votable_id: this.props.currentCommentObj.id,
                    id: currentVote.id,
                }
                const vote = Object.assign({}, updatedVoteObj);
                return this.props.updateCommentVote(vote)
                    .then(
                        this.setState({
                            thumbUpColor: 'gray',
                            thumbDownColor: 'gray',
                        })
                    );

            // if currentuser id IS in array AND vote.value is 0
            // update vote: set vote.value to - 1 in db
            // change thumb color to red
            } else if (currentVote.author_id === this.props.currentUser.id && currentVote.value === 0) {
                let updatedVoteObj = {
                    value: -1,
                    author_id: currentVote.author_id,
                    votable_type: 'Comment',
                    votable_id: this.props.currentCommentObj.id,
                    id: currentVote.id,
                }
                const vote = Object.assign({}, updatedVoteObj);
                return this.props.updateCommentVote(vote)
                    .then(
                        this.setState({
                            thumbUpColor: 'gray', 
                            thumbDownColor: 'rgb(234, 43, 36)', //red
                        })
                    );
            }

        }

        //IF NOTHING CLICKED YET EVER—CREATE NEW VOTE AFTER EVERY ELEMENT IN ALL VOTES ARRAY IS CHECKED FOR CURRENT USER ID
        // create new vote and set vote.value to -1 in db
        // change thumb color to red
        let newVoteObj = {
            value: -1,
            author_id: this.props.currentUser.id,
            votable_type: 'Comment',
            votable_id: this.props.currentCommentObj.id,
        }
        const vote = Object.assign({}, newVoteObj);
        return this.props.createCommentVote(vote)
                    .then(
                        this.setState({
                            thumbUpColor: 'gray', 
                            thumbDownColor: 'rgb(234, 43, 36)', //red
                        })
                        );
    }

    tallyCurrentCommentObjVotes() {
        const allVotesArr = this.props.currentCommentObj.all_votes
        let valueSum = 0;

        for (let i = 0; i < allVotesArr.length; i++) {
            valueSum += allVotesArr[i].value;
        }
        return valueSum;
    }

    tallyCurrentAnnoObjVotes() {
        const allVotesArr = this.props.currentAnnoObj.all_votes
        let valueSum = 0;

        for (let i = 0; i < allVotesArr.length; i++) {
            valueSum += allVotesArr[i].value;
        }
        return valueSum;
    }

    handleThumbUpAnnoClick() {

        //no currentUser / not logged in
        if (!this.props.currentUser) {
            return null;
        }

        const allVotesArr = this.props.currentAnnoObj.all_votes

        for (let i = 0; i < allVotesArr.length; i++) {
            const currentVote = allVotesArr[i];

            //currentUser has upvote clicked so currentVote.value === 1
            // update vote: set vote.value to 0 in db
            // change thumb color to gray
            if (currentVote.author_id === this.props.currentUser.id && currentVote.value === 1) {
                // debugger;
                let updatedVoteObj = {
                    value: 0,
                    author_id: currentVote.author_id,
                    votable_type: 'Annotation',
                    votable_id: this.props.currentAnnoObj.id,
                    id: currentVote.id,
                }

                const vote = Object.assign({}, updatedVoteObj);

                return this.props.updateAnnotationVote(vote)
                    .then(
                        this.setState({
                            thumbUpColor: 'gray',
                            thumbDownColor: 'gray',
                        })
                    );

                //currentUser has downvote clicked so currentVote.value === -1
                // update vote: set vote.value to 1 in db
                // change thumb color to green
            }
            else if (currentVote.author_id === this.props.currentUser.id && currentVote.value === -1) {

                let updatedVoteObj = {
                    value: 1,
                    author_id: currentVote.author_id,
                    votable_type: 'Annotation',
                    votable_id: this.props.currentAnnoObj.id,
                    id: currentVote.id,
                }
                const vote = Object.assign({}, updatedVoteObj);
                return this.props.updateAnnotationVote(vote)
                    .then(
                        this.setState({
                            thumbUpColor: 'rgb(84, 200, 53)', //green
                            thumbDownColor: 'gray',
                        })
                    );

                //currentUser has voted in the past but has unclicked buttons so currentVote.value === 0
                // update vote: set vote.value to 1 in db
                // change thumb color to green
            } else if (currentVote.author_id === this.props.currentUser.id && currentVote.value === 0) {
                let updatedVoteObj = {
                    value: 1,
                    author_id: currentVote.author_id,
                    votable_type: 'Annotation',
                    votable_id: this.props.currentAnnoObj.id,
                    id: currentVote.id,
                }
                const vote = Object.assign({}, updatedVoteObj);
                return this.props.updateAnnotationVote(vote)
                    .then(
                        this.setState({
                            thumbUpColor: 'rgb(84, 200, 53)', //green
                            thumbDownColor: 'gray',
                        })
                    )
            }
        }

        //IF NOTHING CLICKED YET EVER—CREATE NEW VOTE AFTER EVERY ELEMENT IN ALL VOTES ARRAY IS CHECKED FOR CURRENT USER ID
        // create new vote and set vote.value to 1 in db
        // change thumb color to green
        let newVoteObj = {
            value: 1,
            author_id: this.props.currentUser.id,
            votable_type: 'Annotation',
            votable_id: this.props.currentAnnoObj.id,
        }
        const vote = Object.assign({}, newVoteObj);
        return this.props.createAnnotationVote(vote)
            .then(
                this.setState({
                    thumbUpColor: 'rgb(84, 200, 53)', //green
                    thumbDownColor: 'gray',
                }));
    }

    handleThumbDownAnnoClick() {

        //no currentUser / not logged in
        if (!this.props.currentUser) {
            return null;
        }

        const allVotesArr = this.props.currentAnnoObj.all_votes

        for (let i = 0; i < allVotesArr.length; i++) {
            const currentVote = allVotesArr[i];

            // if currentuser id IS in array && vote.value is 1
            // update vote: set vote.value to - 1 in db
            // change thumb color to red
            if (currentVote.author_id === this.props.currentUser.id && currentVote.value === 1) {
                let updatedVoteObj = {
                    value: -1,
                    author_id: currentVote.author_id,
                    votable_type: 'Annotation',
                    votable_id: this.props.currentAnnoObj.id,
                    id: currentVote.id,
                }

                const vote = Object.assign({}, updatedVoteObj);
                return this.props.updateAnnotationVote(vote)
                    .then(
                        this.setState({
                            thumbUpColor: 'gray', //red
                            thumbDownColor: 'rgb(234, 43, 36)', //red
                        })
                    )

                // if currentuser id IS in array && vote.value is - 1
                // update vote: set vote.value to 0 in db
                // change thumb color to gray
            }
            else if (currentVote.author_id === this.props.currentUser.id && currentVote.value === -1) {
                let updatedVoteObj = {
                    value: 0,
                    author_id: currentVote.author_id,
                    votable_type: 'Annotation',
                    votable_id: this.props.currentAnnoObj.id,
                    id: currentVote.id,
                }
                const vote = Object.assign({}, updatedVoteObj);
                return this.props.updateAnnotationVote(vote)
                    .then(
                        this.setState({
                            thumbUpColor: 'gray',
                            thumbDownColor: 'gray',
                        })
                    );

                // if currentuser id IS in array AND vote.value is 0
                // update vote: set vote.value to - 1 in db
                // change thumb color to red
            } else if (currentVote.author_id === this.props.currentUser.id && currentVote.value === 0) {
                let updatedVoteObj = {
                    value: -1,
                    author_id: currentVote.author_id,
                    votable_type: 'Annotation',
                    votable_id: this.props.currentAnnoObj.id,
                    id: currentVote.id,
                }
                const vote = Object.assign({}, updatedVoteObj);
                return this.props.updateAnnotationVote(vote)
                    .then(
                        this.setState({
                            thumbUpColor: 'gray',
                            thumbDownColor: 'rgb(234, 43, 36)', //red
                        })
                    );
            }

        }

        //IF NOTHING CLICKED YET EVER—CREATE NEW VOTE AFTER EVERY ELEMENT IN ALL VOTES ARRAY IS CHECKED FOR CURRENT USER ID
        // create new vote and set vote.value to -1 in db
        // change thumb color to red
        let newVoteObj = {
            value: -1,
            author_id: this.props.currentUser.id,
            votable_type: 'Annotation',
            votable_id: this.props.currentAnnoObj.id,
        }
        const vote = Object.assign({}, newVoteObj);
        return this.props.createAnnotationVote(vote)
            .then(
                this.setState({
                    thumbUpColor: 'gray',
                    thumbDownColor: 'rgb(234, 43, 36)', //red
                })
            );
    }

    render() {

        // console.log(this.props);
        // debugger;

        if (this.props.currentCommentObj) {
            return (
                <div className='vote-container'>
                    <FontAwesomeIcon
                        className='vote-thumb-up-icon'
                        icon={faThumbsUp}
                        onClick={this.handleThumbUpCommentClick}
                        style={{ color: this.state.thumbUpColor }}
                    />
                    <span className='vote-count'>{this.tallyCurrentCommentObjVotes()}</span>
                    <FontAwesomeIcon
                        className='vote-thumb-down-icon'
                        icon={faThumbsDown}
                        onClick={this.handleThumbDownCommentClick}
                        style={{ color: this.state.thumbDownColor }}
                    />
                </div>
            )
        } else if (this.props.currentAnnoObj) {
            return (
                <div className='vote-container'>
                    <FontAwesomeIcon
                        className='vote-thumb-up-icon'
                        icon={faThumbsUp}
                        onClick={this.handleThumbUpAnnoClick}
                        style={{ color: this.state.thumbUpColor }}
                    />
                    <span className='vote-count'>{this.tallyCurrentAnnoObjVotes()}</span>
                    <FontAwesomeIcon
                        className='vote-thumb-down-icon'
                        icon={faThumbsDown}
                        onClick={this.handleThumbDownAnnoClick}
                        style={{ color: this.state.thumbDownColor }}
                    />
                </div>
            )
        } else {
            return null;
        }

    }
};

export default VotesShow;