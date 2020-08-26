import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons'

class VotesShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            voteTally: 0,
        };
        this.incrementVoteTally = this.incrementVoteTally.bind(this);
        this.decrementVoteTally = this.decrementVoteTally.bind(this);
    
    }

    componentDidMount() {
        
    }

    incrementVoteTally() {
        console.log("add 1 to voteTally");
        this.setState({
            voteTally: voteTally + 1,
        })
    }
    
    decrementVoteTally() {
        console.log("subtract 1 to voteTally");
        this.setState({
            voteTally: voteTally - 1, 
        })
    }

    render() {
        return (
            <div className='vote-container'>
                <FontAwesomeIcon className='vote-thumb-up-icon' icon={faThumbsUp} />
                <span className='vote-count'>{this.state.voteTally}</span>
                <FontAwesomeIcon className='vote-thumb-down-icon' icon={faThumbsDown} />
            </div>
        )
    }
};

export default VotesShow;