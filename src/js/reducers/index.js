import {combineReducers} from 'redux';

import pet from './pet';
import authorized from './authorized';

export default combineReducers({
  pet,
  authorized
});
