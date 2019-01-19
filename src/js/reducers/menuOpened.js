export default function menuOpened(state = false, action) {
  switch (action.type) {
    case 'MENU_TOGGLED':
      return !state;
    case 'LOGOUT_SUCCESS':
      return false;
    default:
      return state;
  }
};
