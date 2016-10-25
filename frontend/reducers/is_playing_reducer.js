import { START_PLAYING, STOP_PLAYING }
  from '../actions/playing_actions.js';

export const isPlayingReducer = (state = false, action) => {
  switch (action.type) {
    case (START_PLAYING):
      return true;
    case (STOP_PLAYING):
      return false;
    default:
      return state;
  }
};
