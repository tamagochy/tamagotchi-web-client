const initialState = null;

export default function play(state = initialState, action) {
  switch (action.type) {
    case 'ACTIONS_LOADED':
      return action.actions.filter(a => a.room === 'playRoom');
    default:
      return state;
  }
};
