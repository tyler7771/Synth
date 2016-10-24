import { START_RECORDING, STOP_RECORDING, ADD_NOTES }
  from '../actions/tracks_actions';
import merge from 'lodash/merge';

let currTrackId = 0;

export const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_RECORDING:
      currTrackId++;
      let newTrack = {
        id: currTrackId,
        name: `Track_${currTrackId}`,
        roll: [],
        timeStart: Date.now()
      };
      // return merge(state, {currentTrackId: newTrack});
      return newTrack;
    case STOP_RECORDING:
      const emptyNotes = {
        notes: [],
        timeSlice: action.timeNow - state.timeStart
      };
      return merge({}, state, {
        roll: [
          ...state.roll,
          emptyNotes
        ]
      });
    case ADD_NOTES:
      const row = {
        notes: action.notes,
        timeSlice: action.timeNow - state.timeStart
      };
      return merge({}, state, {
        roll: [
          ...state.roll,
          row
        ]
      });
    default:
      return state;
  }
};
