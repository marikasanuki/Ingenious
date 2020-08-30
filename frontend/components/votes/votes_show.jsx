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

    CASE 3: Nothing clicked yet
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
            // userVoteValue: 0,
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
        const allVotesArr = this.props.currentCommentObj.all_votes
        // console.log(allVotesArr);
        // debugger;
        for (let i = 0; i < allVotesArr.length; i++) {
            const currentVote = allVotesArr[i];
            // console.log(currentVote);
            // console.log(this.state.thumbUpColor);
            if (currentVote.author_id === this.props.currentUser.id && currentVote.value === 1) {
                
                let updatedVoteObj = {
                    value: 0, 
                    author_id: currentVote.author_id, 
                    votable_type: 'Comment',
                    votable_id: this.props.currentCommentObj.id,
                    id: currentVote.id,
                }
                
                const vote = Object.assign({}, updatedVoteObj);
                this.props.updateCommentVote(vote)
                    .then(
                        this.setState({
                            thumbUpColor: 'gray',
                        })
                    )
      
                console.log("why isn't state different?");
                console.log(this.state.thumbUpColor);
                debugger;                    
                // update vote: set vote.value to 0 in db
                // change thumb color to gray
            } 
            // else if (currentVote.author_id === this.props.currentUser.id && currentVote.value === -1) {
                // update vote: set vote.value to 1 in db
                // change thumb color to green
            // } else {
                // create new vote and set vote.value to 1 in db
                // change thumb color to green
            // }
        }

        /* 
        
        CASE 2: THUMB'S UP BUTTON already clicked
        check this.props.currentCommentObj.all_votes array to see if any of the author_ids matches the currentuser's id
        if currentuser id IS in array && vote.value is 1
        update vote: set vote.value to 0 in db
        change thumb color to gray
        
        CASE 3: THUMB'S DOWN BUTTON already clicked
        check this.props.currentCommentObj.all_votes array to see if any of the author_ids matches the currentuser's id
        if currentuser id IS in array && vote.value is - 1
        update vote: set vote.value to 1 in db
        change thumb color to green
        
        CASE 1: Nothing clicked yet
        check this.props.currentCommentObj.all_votes array to see if any of the author_ids matches the currentuser's id
        if currentuser id is NOT in array,
            create new vote and set vote.value to 1 in db
            change thumb color to green
        */


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