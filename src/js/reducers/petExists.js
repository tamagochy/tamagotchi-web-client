export default function petExists(state = false, action) {
  switch (action.type) {
    case 'PET_LOADED':
      return true;
    case 'PET_LOADING_ERROR':
      return false;
    default:
      return state;
  }
};
