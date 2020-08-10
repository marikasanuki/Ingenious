import React from "react";

class CommentsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment_body: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) =>
            this.setState({
                [field]: e.currentTarget.value,
            });
    }

    handleSubmit(e) {
        e.preventDefault();   

        const comment = Object.assign({}, this.state, {
            comment_body: this.state.comment_body,
            track_id: this.props.track.id,
        });

        this.props
            .createComment(comment)
            .then(() => this.setState({ comment_body: "" }))
            .then(console.log("Comment successfully saved to DB!"));
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit} className='comment-form'>

                <textarea 
                    className='comment-textarea'
                    maxLength="900"
                    value={this.state.comment_body}
                    onChange={this.update("comment_body")}
                    placeholder="Add a comment"
                />
                <br/>
                <input 
                    className='comment-submit-button'
                    type='submit' 
                    value={"SUBMIT"} 
                />
            </form>
        );
    }
}

export default CommentsForm;