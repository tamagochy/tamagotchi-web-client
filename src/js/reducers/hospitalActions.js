const initialState = null;

export default function playRoomActions(state = initialState, action) {
  switch (action.type) {
    case 'ACTIONS_LOADED':
      return action.actions.filter(a => a.room === 'hospital');
    default:
      return state;
  }
};
