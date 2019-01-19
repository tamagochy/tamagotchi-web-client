import {combineReducers} from 'redux';

import authorized from './authorized';
import pet from './pet';
import currentRoom from './currentRoom';
import playRoomActions from './playRoomActions';
import kitchenActions from './kitchenActions';
import hospitalActions from './hospitalActions';
import menuOpened from './menuOpened';
import topPlayers from './topPlayers';

export default combineReducers({
  authorized,
  pet,
  currentRoom,
  playRoomActions,
  kitchenActions,
  hospitalActions,
  menuOpened,
  topPlayers
});
