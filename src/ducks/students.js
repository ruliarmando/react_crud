import api from '../api';

export const STUDENT_LOAD_REQUEST = 'STUDENT_LOAD_REQUEST';
export const STUDENT_LOAD_FAILED = 'STUDENT_LOAD_FAILED';
export const STUDENT_LOAD_SUCCESS = 'STUDENT_LOAD_SUCCESS';
export const STUDENT_SAVE_REQUEST = 'STUDENT_SAVE_REQUEST';
export const STUDENT_SAVE_FAILED = 'STUDENT_SAVE_FAILED';
export const STUDENT_SAVE_SUCCESS = 'STUDENT_SAVE_SUCCESS';

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
      .catch(err => dispatch(loadFailed(err)));
  };
};

const saveFailed = (err) => ({
  type: STUDENT_SAVE_FAILED,
  payload: err,
});

const saveSuccess = (data) => ({
  type: STUDENT_SAVE_SUCCESS,
  payload: data,
});

export const save = (data) => {
  return dispatch => {
    dispatch({ type: STUDENT_SAVE_REQUEST });
    return api.post('/students', data)
      .then(result => dispatch(saveSuccess(result.data)))
      .catch(err => dispatch(saveFailed(err)));
  };
};

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