export default function currentRoom(state, action) {
  switch (action.type) {
    case 'ROOM_CHANGED':
      localStorage.setItem('room', action.room);
      return action.room;
    default:
      if (!localStorage.getItem('room')) {
        localStorage.setItem('room', 'playRoom');
      }
      return localStorage.getItem('room');
  }
};
