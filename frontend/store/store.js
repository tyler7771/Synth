import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

// const preloadedState = {
//   notes: []
// };

// const configureStore = (preloadedState) => ({
//   createStore(rootReducer)
// });

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState);
};

export default configureStore;
