import { connect } from 'react-redux';
import Jukebox from './jukebox';
import { groupUpdate } from '../../actions/notes_actions';
import { startPlaying, stopPlaying } from '../../actions/playing_actions';

const mapStateToProps = state => ({
  tracks: state.tracks,
  isRecording: state.isRecording,
  isPlaying: state.isPlaying
});

const mapDispatchToProps = dispatch => ({
    onPlay: track => e => {
    dispatch(startPlaying());
    const playbackStartTime = Date.now();
    let currNote = 0;
    let timeElapsed;
    let interval = setInterval(() => {
      if (currNote < track.roll.length) {
        const diff = Date.now() - playbackStartTime;
        if (diff > track.roll[currNote].timeSlice) {
          dispatch(groupUpdate(track.roll[currNote].notes));
          currNote++;
        }
      } else {
        clearInterval(interval);
        dispatch(stopPlaying());
      }
    }, 1);
  }

  // return {
  //   startPlaying: (track) => (e) => onPlay(track, e),
  //   stopPlaying: (track) => (e) => onPlay(track, e)
  // };
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jukebox);
