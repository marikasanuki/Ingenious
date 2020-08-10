import React from "react";

class CommentsItem extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        const { comment, comment_authors, destroyComment } = this.props;

        // console.log('test again: ')
        // console.log(this.props);
        // debugger;

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
            </li>
        )
    }
};

export default CommentsItem;