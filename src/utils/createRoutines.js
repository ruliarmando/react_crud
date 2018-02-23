import { createAction } from 'redux-actions';

const createRoutines = (prefix) => ({
  REQUEST: `${prefix}_REQUEST`,
  FAILED: `${prefix}_FAILED`,
  SUCCESS: `${prefix}_SUCCESS`,
  request: createAction(`${prefix}_START`),
  failed: createAction(`${prefix}_FAILED`),
  success: createAction(`${prefix}_SUCCESS`),
});

export default createRoutines;