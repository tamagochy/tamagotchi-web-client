import {combineReducers} from 'redux';

import pet from './pet';
import authorized from './authorized';
import petExists from './petExists';

export default combineReducers({
  pet,
  authorized,
  petExists
});
