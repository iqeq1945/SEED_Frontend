import { createAction, handleActions } from 'redux-actions';

const START_LOADING = 'loding/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = createAction(
  START_LOADING,
  (requsetType) => requsetType,
);

export const finishLoading = createAction(
  FINISH_LOADING,
  (requsetType) => requsetType,
);

const initialState = {};

const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState,
);

export default loading;
