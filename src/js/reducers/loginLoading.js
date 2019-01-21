export default function loginLoading(state = false, action) {
  switch (action.type) {
    case 'AUTH_INIT':
      return true;
    case 'AUTH_SUCCESS':
    case 'AUTH_FAILED':
      return false;
    default:
      return state;
  }
};
