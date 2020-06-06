import React from "react";

class trackIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {tracks} = this.props;
        return (
            <div>
                {tracks}
            </div>
        )
    }
};

export default trackIndex;