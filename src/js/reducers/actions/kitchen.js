const initialState = null;

export default function kitchen(state = initialState, action) {
  switch (action.type) {
    case 'ACTIONS_LOADED':
      return action.actions.filter(a => a.room === 'kitchen');
    default:
      return state;
  }
};
