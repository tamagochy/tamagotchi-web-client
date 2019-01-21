export default function registerLoading(state = false, action) {
  switch (action.type) {
    case 'REGISTRATION_INIT':
      return true;
    case 'REGISTRATION_SUCCESS':
    case 'REGISTRATION_ERROR':
      return false;
    default:
      return state;
  }
};
