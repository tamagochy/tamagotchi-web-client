import {combineReducers} from 'redux';

import authorized from './authorized';
import pet from './pet';
import currentRoom from './currentRoom';
import menuOpened from './menuOpened';
import topPlayers from './topPlayers';
import actions from './actions';
import loginLoading from './loginLoading';
import loginError from './loginError';
import registerLoading from './registerLoading';
import registerError from './registerError';

export default combineReducers({
  authorized,
  pet,
  currentRoom,
  menuOpened,
  topPlayers,
  actions,
  loginLoading,
  loginError,
  registerLoading,
  registerError
});
