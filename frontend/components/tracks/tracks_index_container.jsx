import { connect } from 'react-redux';
import tracksIndex from './tracks_index';
import { fetchTracks } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger;
    return ({
        tracks: state.tracks,
        // Object.keys(state.tracks).map((key => state.tracks[key])),
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchTracks: () => dispatch(fetchTracks())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(tracksIndex)