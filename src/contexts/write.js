// action
export const WRITE_SUCCESS = 'WRITE_SUCCESS';
export const CHANGE_FILED = 'CHANGE_FILED';
export const MODIFY_FORM = 'MODIFY_FORM';

// initialState
export const WriteInitialState = {
  writes: {
    // id: '',
    // textNUM: '',
    title: '',
    body: ''
    // category: '',
    // timeStamp: ''
  },
  loading: false,
  error: null
};

// reducer
export function WriteReducer(state, action) {
  switch (action.type) {
    case WRITE_SUCCESS:
      return {
        ...state,
        ...WriteInitialState
      };

    case CHANGE_FILED:
      return {
        ...state,
        writes: {
          ...state.writes,
          [action.key]: action.value
        }
      };
    case MODIFY_FORM:
      return {
        ...state,
        writes: {
          ...state.writes,
          // id: action.id,
          // textNUM: action.textNUM,
          title: action.title,
          body: action.body
          // category: action.category,
          // timeStamp: action.timeStamp
        }
      };

    default:
      return state;
  }
}
