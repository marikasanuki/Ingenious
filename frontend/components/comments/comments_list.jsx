import React from "react";
import CommentsItem from './comments_item';

class CommentsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { comments, comment_authors, destroyComment, currentUser } = this.props;
        const allComments = Object.values(comments);
        console.log(comments);
        console.log(allComments);
        return (
            <div className='comments-list'>
                <ul className='comments-list-ul'>
                    {allComments ? allComments.map((comment) => (
                        <CommentsItem
                            comment={comment}
                            key={comment.id}
                            comment_authors={comment_authors}
                            destroyComment={destroyComment}
                            currentUser={currentUser}
                        />
                    )

                    )
                        : null}
                </ul>
            </div>
        )
    }
};

export default CommentsList;