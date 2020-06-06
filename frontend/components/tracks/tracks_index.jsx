import React from "react";

class tracksIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {tracks} = this.props;
        return (
            <div>
                test
                {tracks}
            </div>
        )
    }
};

export default tracksIndex;