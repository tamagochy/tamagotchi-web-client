import {combineReducers} from 'redux';

import authorized from './authorized';
import loginMode from './loginMode';
import pet from './pet';
import petExists from './petExists';

export default combineReducers({
  authorized,
  loginMode,
  pet,
  petExists
});
