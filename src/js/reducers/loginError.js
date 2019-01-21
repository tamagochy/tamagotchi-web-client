const initialState = null;

export default function loginError(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return initialState;
    case 'AUTH_FAILED':
      if (action.data[0].code === "business.BadCredentials") {
        return "Имя или пароль неправильные";
      }
      return "Не удалось войти, что-то пошло не так";
    default:
      return state;
  }
};
