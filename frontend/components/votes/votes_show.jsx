import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
/*
Click THUMB'S UP BUTTON
    CASE 1: Nothing clicked yet
        check this.props.currentCommentObj.all_votes array to see if any of the author_id matches the currentuser's id
        if currentuser id is NOT in array, 
            create new vote and set vote.value to 1 in db

    CASE 2: THUMB'S UP BUTTON already clicked
        update vote: set vote.value to 0 in db
        subtract 1 from this.state.voteTally
        
    CASE 3: THUMB'S DOWN BUTTON already clicked
        update vote: set vote.value to 1 in db
        add 2 to this.state.voteTally
        
Click THUMB'S DOWN BUTTON
    CASE 1: Nothing clicked yet
        create vote: set vote.value to -1 in db
        add vote.value to this.state.voteTally

    CASE 2: THUMB'S UP BUTTON already clicked
        update vote: set vote.value to -1 in db
        subtract 2 from this.state.voteTally

    CASE 3: THUMB'S DOWN BUTTON already clicked
        update vote: set vote.value to 0 in db
        add 1 to this.state.voteTally

*/


class VotesShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            voteTally: 0,
            // userVoteValue: 0,
        };
        // this.incrementVoteTally = this.incrementVoteTally.bind(this);
        // this.decrementVoteTally = this.decrementVoteTally.bind(this);
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

    // incrementVoteTally() {
    //     console.log("add 1 to voteTally");
    //     this.setState({
    //         voteTally: voteTally + 1,
    //     })
    // }
    
    // decrementVoteTally() {
    //     console.log("subtract 1 to voteTally");
    //     this.setState({
    //         voteTally: voteTally - 1, 
    //     })
    // }

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