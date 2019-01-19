import {combineReducers} from 'redux';

import authorized from './authorized';
import loginMode from './loginMode';
import pet from './pet';
import petExists from './petExists';
import currentRoom from './currentRoom';
import playRoomActions from './playRoomActions';
import kitchenActions from './kitchenActions';
import hospitalActions from './hospitalActions';

export default combineReducers({
  authorized,
  loginMode,
  pet,
  petExists,
  currentRoom,
  playRoomActions,
  kitchenActions,
  hospitalActions
});
