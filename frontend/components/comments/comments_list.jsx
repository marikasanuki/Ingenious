import React from "react";
import CommentsItem from './comments_item';

class CommentsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { comments } = this.props;
        const allComments = Object.values(comments);
        return (
            <div>
                {allComments ? allComments.map((comment) => (
                    <CommentsItem
                        comment={comment}
                        key={comment.id}
                    />
                )

                )
                : null }
            </div>
        )
    }
};

export default CommentsList;