export default function authorized(state, action) {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      localStorage.setItem('jwt', action.data);
      return true;
    case 'AUTH_FAILED':
    case 'LOGOUT_SUCCESS':
      return false;
    default:
      return localStorage.getItem('jwt') !== null;
  }
};
