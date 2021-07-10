import React from "react";
import CommentsItem from "./comments_item";

class CommentsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { comments, destroyComment, currentUser } = this.props;

        const allComments = Object.values(comments);
        // const allComments = Object.values(comments).slice(0, Object.values(comments).length - 1); //slicing off the comments_authors element at the end of the comments object to create allComments array with just all of the comments

        return (
            <div className="comments-list">
                <ul className="comments-list-ul">
                    { allComments
                        ? allComments.map((comment) => (
                            <CommentsItem
                                comment={comment}
                                key={comment.id}
                                destroyComment={destroyComment}
                                currentUser={currentUser}
                            />
                        ))
                        : null }
                </ul>
            </div>
        )
    }
};

export default CommentsList;
