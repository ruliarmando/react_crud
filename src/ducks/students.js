import createRoutines from '../utils/createRoutines';
import api from '../api';

export const studentLoad = createRoutines('STUDENT_LOAD');
export const studentSave = createRoutines('STUDENT_SAVE');
export const studentUpdate = createRoutines('STUDENT_UPDATE');
export const studentDelete = createRoutines('STUDENT_DELETE');

export const load = () => {
  return dispatch => {
    dispatch(studentLoad.request());
    return api.get('/students')
      .then(result => dispatch(studentLoad.success(result.data)))
      .catch(err => dispatch(studentLoad.failed(err)));
  };
};

export const save = data => {
  return dispatch => {
    dispatch(studentSave.request());
    return api.post('/students', data)
      .then(result => dispatch(studentSave.success(result.data)))
      .catch(err => dispatch(studentSave.failed(err)));
  };
};

export const update = (id, data) => {
  return dispatch => {
    dispatch(studentUpdate.request());
    return api.put(`/students/${id}`, data)
      .then(result => dispatch(studentUpdate.success(result.data)))
      .catch(err => dispatch(studentUpdate.failed(err)));
  };
};

export const remove = id => {
  return dispatch => {
    dispatch(studentDelete.request());
    return api.delete(`/students/${id}`)
      .then(result => dispatch(studentDelete.success(result.data)))
      .catch(err => dispatch(studentDelete.failed(err)));
  };
};

const initialState = {
  loading: false,
  items: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case studentLoad.REQUEST: {
      return {
        ...state,
        loading: true,
      };
      break;
    }
    case studentLoad.SUCCESS: {
      return {
        ...state,
        items: action.payload.data,
        loading: false,
      };
      break;
    }
    case studentLoad.FAILED: {
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