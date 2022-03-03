// Action type
export const CHANGE_FIELD = 'auth/CHANGE_FILELD';
export const INITIALIZE_FORM = 'auth/INITIALZE_FORM';
export const REGISTER_INFO = 'auth/REGISTER_INFO';
// export const CHECK_LOGIN = 'CHEKC_LOGIN';
// export const FILL_WRITE_INPUT = 'FILL_WRITE_INPUT';
// export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FALIURE';
//-------------------------------------------------------------
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FALIURE = 'LOGIN_FAILURE';

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// InitialState
export const AuthInitialState = {
  user: {
    id: '',
    username: '',
    nickname: '',
    password: '',
    confirmPassword: ''
  },
  login: {
    password: '',
    username: ''
  },
  auth: null,
  authError: null
};

// Reducer
export const AuthReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        [action.form]: {
          ...state[action.form],
          [action.key]: action.value,
          position: action.form
        }
      };
    case REGISTER_INFO:
      console.log('HI_INFO');
      return {
        ...state,
        [action.form]: {
          username: action.id,
          nickname: action.nickname
        }
      };
    // case CHECK_LOGIN:
    //   return {
    //     ...state,
    //     login: {
    //       ...state.login,
    //       id: action.id,
    //       username: action.username,
    //       nickname: action.nickname
    //     }
    //   };
    // case FILL_WRITE_INPUT:
    //   return {
    //     ...state
    //   };
    case INITIALIZE_FORM:
      console.log('비움?');
      return {
        ...state,
        ...AuthInitialState
      };
    case REGISTER_SUCCESS:
      console.log('컨텍스트api확인');
      return {
        ...state,
        authError: null,
        auth: action.auth
      };
    case REGISTER_FAILURE:
      console.log('에러.. 왜지');
      return {
        ...state,
        authError: action.error.res
      };

    // case LOGIN_START:
    //   return {
    //     ...state,
    //     auth: action.auth
    //   };
    case LOGIN_SUCCESS:
      console.log('GOOD~~');
      return {
        ...state,
        auth: action.auth,
        authError: null
      };
    case LOGIN_FALIURE:
      return {
        ...state,
        authError: action.error.res
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        ...AuthInitialState
      };

    default:
      return state;
  }
};

export default AuthReducer;
