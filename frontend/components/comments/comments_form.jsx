import React from "react";

class CommentsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment_body: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();   
    }

    render () {
        return (
            <div></div>
        );
    }
}

export default CommentsForm;