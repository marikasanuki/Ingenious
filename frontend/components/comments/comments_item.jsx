import React from "react";

class CommentsItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {comment} = this.props;
        return (
            <li>
                <div>
                    {comment.comment_body}
                </div>
                <div>
                    comment's author id: 
                    {comment.author_id}
                </div>
            </li>
        )
    }
};

export default CommentsItem;