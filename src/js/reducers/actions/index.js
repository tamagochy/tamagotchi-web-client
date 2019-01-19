import {combineReducers} from 'redux';

import play from './play';
import kitchen from './kitchen';
import hospital from './hospital';

export default combineReducers({
  play,
  kitchen,
  hospital
});
