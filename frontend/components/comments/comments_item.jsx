import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class CommentsItem extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        const { comment, comment_authors, destroyComment, currentUser } = this.props;

        console.log('test again: ')
        console.log(this.props);
        debugger;

        return (
            <li className='comments-item-li'>
                <div className='comments-author'>
                    comment's author id: 
                    {comment.author_id}
                    
                    {/* {(comment_authors)? (comment_authors[comment.author_id].username) : null } */}
                </div>
                <div className='comments-body'>
                    {comment.comment_body}
                </div>
                

                <div className="comment-del-button-cont">
                    {/* { (currentUser && comment.author_id === currentUser.id) ? ( */}
                            <button
                                className="comments-del-button"
                                onClick={() => {
                                    destroyComment(comment.id);
                                }}
                            >
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                        {/* ) : null} */}


                </div>
                
            </li>
        )
    }
};

export default CommentsItem;