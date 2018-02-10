import api from '../api';

export const STUDENT_LOAD_REQUEST = 'STUDENT_LOAD_REQUEST';
export const STUDENT_LOAD_FAILED = 'STUDENT_LOAD_FAILED';
export const STUDENT_LOAD_SUCCESS = 'STUDENT_LOAD_SUCCESS';

const loadFailed = (err) => ({
  type: STUDENT_LOAD_FAILED,
  payload: err,
});

const loadSuccess = (data) => ({
  type: STUDENT_LOAD_SUCCESS,
  payload: data,
});

export const load = () => {
  return dispatch => {
    dispatch({ type: STUDENT_LOAD_REQUEST });
    return api.get('/students')
      .then(result => dispatch(loadSuccess(result.data)))
      .catch(err => loadFailed(err));
  }
}

const initialState = {
  loading: false,
  items: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_LOAD_REQUEST: {
      return {
        ...state,
        loading: true,
      };
      break;
    }
    case STUDENT_LOAD_SUCCESS: {
      return {
        ...state,
        items: action.payload.data,
        loading: false,
      };
      break;
    }
    case STUDENT_LOAD_FAILED: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
      break;
    }
    default:
      return state;
  }
}

export default reducer;