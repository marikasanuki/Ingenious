import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
/*
Click THUMB'S UP BUTTON
  
    CASE 1: THUMB'S UP BUTTON already clicked
        check this.props.currentCommentObj.all_votes array to see if any of the author_ids matches the currentuser's id
        if currentuser id IS in array && vote.value is 1
            update vote: set vote.value to 0 in db
            change thumb color to gray
        
    CASE 2: THUMB'S DOWN BUTTON already clicked
        check this.props.currentCommentObj.all_votes array to see if any of the author_ids matches the currentuser's id
        if currentuser id IS in array && vote.value is -1
            update vote: set vote.value to 1 in db
            change thumb color to green

    CASE 3: Nothing clicked currently by user but user has previously voted and unlicked button
            check this.props.currentCommentObj.all_votes array to see if any of the author_ids matches the currentuser's id
            if currentuser id IS in array AND vote.value is 0
                update vote and set vote.value to 1 in db
                change thumb color to green
    CASE 4: Nothing clicked yet ever (must create brand-new vote for current user)
            check this.props.currentCommentObj.all_votes array to see if any of the author_ids matches the currentuser's id
            if currentuser id is NOT in array || vote.value is 0
                create new vote and set vote.value to 1 in db
                change thumb color to green

Click THUMB'S DOWN BUTTON

    CASE 1: THUMB'S UP BUTTON already clicked
        check this.props.currentCommentObj.all_votes array to see if any of the author_ids matches the currentuser's id
        if currentuser id IS in array && vote.value is 1
        update vote: set vote.value to -1 in db
        change thumb color to red

    CASE 2: THUMB'S DOWN BUTTON already clicked
        check this.props.currentCommentObj.all_votes array to see if any of the author_ids matches the currentuser's id
        if currentuser id IS in array && vote.value is -1
        update vote: set vote.value to 0 in db
        change thumb color to gray

    CASE 3: Nothing clicked yet
        check this.props.currentCommentObj.all_votes array to see if any of the author_ids matches the currentuser's id
        if currentuser id is NOT in array || vote.value is 0
            create vote: set vote.value to -1 in db
            change thumb color to red
*/


class VotesShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            voteTally: 0,
            thumbUpColor: null,
        };
        this.handleThumbUpClick = this.handleThumbUpClick.bind(this);
        this.handleThumbDownClick = this.handleThumbDownClick.bind(this);
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

    handleThumbUpClick() {
        // console.log(allVotesArr);
        // debugger;

        //no currentUser / not logged in
        if (!this.props.currentUser) {
            return null;
        }
        
        console.log("this.props", this.props );
        debugger;
        const allVotesArr = this.props.currentCommentObj.all_votes

        for (let i = 0; i < allVotesArr.length; i++) {
            const currentVote = allVotesArr[i];
            console.log("this.props.currentUser.id", this.props.currentUser.id);
            console.log("currentVote.author_id", currentVote.author_id);
            console.log("currentVote", currentVote);
            debugger;
            // console.log(this.state.thumbUpColor);


            //currentUser has upvote clicked so currentVote.value === 1
            // update vote: set vote.value to 0 in db
            // change thumb color to gray
            if (currentVote.author_id === this.props.currentUser.id && currentVote.value === 1) {
                debugger;
                let updatedVoteObj = {
                    value: 0, 
                    author_id: currentVote.author_id, 
                    votable_type: 'Comment',
                    votable_id: this.props.currentCommentObj.id,
                    id: currentVote.id,
                }
                
                const vote = Object.assign({}, updatedVoteObj);
                console.log("vote", vote)
                debugger
                return this.props.updateCommentVote(vote);
                    // .then(
                    //     this.setState({
                    //         thumbUpColor: 'gray',
                    //     })
                    // )
                    // .then(console.log('vote saved to db'))
                    // .catch((err) => console.log(err))

            //currentUser has downvote clicked so currentVote.value === -1
            // update vote: set vote.value to 1 in db
            // change thumb color to green
            } 
            else if (currentVote.author_id === this.props.currentUser.id && currentVote.value === -1) {
                debugger;
                let updatedVoteObj = {
                    value: 1,
                    author_id: currentVote.author_id,
                    votable_type: 'Comment',
                    votable_id: this.props.currentCommentObj.id,
                    id: currentVote.id,
                }
                const vote = Object.assign({}, updatedVoteObj);
                return this.props.updateCommentVote(vote);
                    // .then(
                    //     this.setState({
                    //         thumbUpColor: 'green',
                    //     })
                    // )

            //currentUser has voted in the past but has unclicked buttons so currentVote.value === 0
            // update vote: set vote.value to 1 in db
            // change thumb color to green
            } else if ( currentVote.author_id === this.props.currentUser.id && currentVote.value === 0 ) { 
                debugger;
                let updatedVoteObj = {
                    value: 1,
                    author_id: currentVote.author_id,
                    votable_type: 'Comment',
                    votable_id: this.props.currentCommentObj.id,
                    id: currentVote.id,
                }
                const vote = Object.assign({}, updatedVoteObj);
                return this.props.updateCommentVote(vote);
                    // .then(
                    //     this.setState({
                    //         thumbUpColor: 'green',
                    //     })
                    // )
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
            // id: currentVote.id,
        }
        const vote = Object.assign({}, newVoteObj);
        debugger;
        return this.props.createCommentVote(vote);
                //     .then(
                //         this.setState({
                //             thumbUpColor: 'green',
                //         })
                // ).catch((err) => console.log(err));


    }
    
    handleThumbDownClick() {

        this.setState({

        })
    }

    tallyCurrentCommentObjVotes() {
        const allVotesArr = this.props.currentCommentObj.all_votes
        let valueSum = 0;

        for (let i = 0; i < allVotesArr.length; i++) {
            valueSum += allVotesArr[i].value;
        }
        this.setState({
            voteTally: valueSum,
        })
    }

    tallyCurrentAnnoObjVotes() {
        const allVotesArr = this.props.currentAnnoObj.all_votes
        let valueSum = 0;

        for (let i = 0; i < allVotesArr.length; i++) {
            valueSum += allVotesArr[i].value;
        }

        this.setState({
            voteTally: valueSum,
        })
    }

    render() {

        // console.log('this.props inside votes show:');
        // console.log(this.props);
        // debugger;

        if (this.props.currentCommentObj) {
            return (
                <div className='vote-container'>
                    <FontAwesomeIcon
                        className='vote-thumb-up-icon'
                        icon={faThumbsUp}
                        onClick={this.handleThumbUpClick}
                    />
                    <span className='vote-count'>{this.state.voteTally}</span>
                    <FontAwesomeIcon
                        className='vote-thumb-down-icon'
                        icon={faThumbsDown}
                        onClick={this.handleThumbDownClick}
                    />
                </div>
            )
        } else if (this.props.currentAnnoObj) {
            return (
                <div className='vote-container'>
                    <FontAwesomeIcon
                        className='vote-thumb-up-icon'
                        icon={faThumbsUp}
                        onClick={this.incrementVoteTally}
                    />
                    <span className='vote-count'>{this.state.voteTally}</span>
                    <FontAwesomeIcon
                        className='vote-thumb-down-icon'
                        icon={faThumbsDown}
                        onClick={this.incrementVoteTally}
                    />
                </div>
            )
        } else {
            return null;
        }


    }
};

export default VotesShow;