import { connect } from 'react-redux';
import TracksShow from './tracks_show';
import { fetchTrack } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
        console.log('hit mstp in tracks show container')
        debugger;
    return ({
        track: state.tracks[ownProps.match.params.track.id],
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchTrack: (track) => dispatch(fetchTrack(track.id))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(TracksShow)