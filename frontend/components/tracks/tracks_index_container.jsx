import { connect } from 'react-redux';
import trackIndex from './tracks_index';
import { fetchTracks } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(trackIndex)