import { connect } from 'react-redux';
import tracksShow from './tracks_show';

const mapStateToProps = (state, ownProps) => {
        debugger;
    return ({
        track: state.track,
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchTrack: (track) => dispatch(fetchTrack(track))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(tracksShow)