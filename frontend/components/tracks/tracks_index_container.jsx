import { connect } from 'react-redux';
import TracksIndex from './tracks_index';
import { fetchTracks } from '../../actions/track_actions';

const mapStateToProps = (state) => {
    // console.log(state);
    // console.log(state.entities.tracks);
    // console.log(Object.keys(state.entities.tracks));
    // debugger;
    return ({
        tracks: Object.values(state.entities.tracks)
    })

    // return ({
    //     tracks: Object.keys(state.entities.tracks).map(key => state.entities.tracks[key])
    // })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchTracks: () => dispatch(fetchTracks()),
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(TracksIndex)