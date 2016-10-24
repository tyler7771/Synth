import { KEY_PRESSED, KEY_RELEASED } from '../actions/notes_actions';
import { NOTE_NAMES } from '../util/tones';

const validKey = (key) => {
    // return NOTE_NAMES.includes(key) ? true : false;
    if (NOTE_NAMES.includes(key)) return true;
    return false;
};

export const notesReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case (KEY_PRESSED):
      if (validKey(action.key) && !state.includes(action.key)) {
        return [
          ...state, action.key
        ];
      }
      return state;
    case (KEY_RELEASED):
      if (state.includes(action.key)) {
        let idx = state.indexOf(action.key);
        return [
          ...state.slice(0, idx),
          ...state.slice(idx + 1)
        ];
      }
      return state;
    default:
      return state;
  }
};
