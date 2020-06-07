import { connect } from 'react-redux';
import TracksIndex from './tracks_index';
import { fetchTracks } from '../../actions/track_actions';

const mapStateToProps = (state) => {
    console.log('hit mstp in tracks index container');
    // debugger;

    return ({
        tracks: Object.values(state.entities.tracks),
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchTracks: () => dispatch(fetchTracks()),
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(TracksIndex)