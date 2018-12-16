export default function loginMode(state = true, action) {
  switch (action.type) {
    case 'LOGIN_MODE_SWITCHED':
      return !state;
    default:
      return state;
  }
};
