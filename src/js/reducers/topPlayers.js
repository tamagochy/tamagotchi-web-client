const initialState = null;
export default function topPlayers(state = initialState, action) {
  switch (action.type) {
    case 'TOP_PLAYERS_LOADED':
      return action.data;
    case 'TOP_PLAYERS_LEAVE':
    case 'LOGOUT_SUCCESS':
      return initialState;
    default:
      return state;
  }
};
